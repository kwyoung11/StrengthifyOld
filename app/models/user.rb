class User < ActiveRecord::Base
   attr_accessible :name, :email, :password, :password_confirmation, :oauth_token, :oauth_secret, :uid, :provider
   
   
   # Database Relations 
   has_many :workouts, :dependent => :destroy
   
   # Validations 
   validates :name, presence: true
   validates :email, presence: true, uniqueness: true
   has_secure_password(validations: false)
   validates_presence_of :password, :on => :create, :on => :update
   validates_confirmation_of :password
   
   # Creates identificiation cookie for new users
   before_create { generate_token(:auth_token) }
  
  #### 
  # Sends email to user if valid email was provided in password_resets#create. 
  # Provides link with unique code that allows the user to update password,
  # using user_mailer#password_reset as template
  ####
  def send_password_reset 
     generate_token(:password_reset_token)
     self.password_reset_sent_at = Time.zone.now
     save!(:validate => false)
     UserMailer.password_reset(self).deliver
  end
  
  ####
  # Generates a token for use with cookies and 
  # password reset codes, and keeps repeating if generated code matches 
  # that of another user in the db.
  # @param column. The specific column in the Users table.
  ###
  def generate_token(column)
    begin
      self[column] = SecureRandom.urlsafe_base64
    end while User.exists?(column => self[column])
  end
  
  ###
   # Finds user if previously signed in with Fitbit and Omniauth.
   # See sessions#create_with_fitbit
   # @param hash. The hash of key=>value pairs that Fitbit responds with,
   # according to the auth hash schema at https://github.com/intridea/omniauth/wiki/Auth-Hash-Schema
   ###
  def self.from_omniauth(auth)
    where(auth.slice("provider", "uid")).first || create_from_omniauth(auth)
  end
  
  ###
  # Creates a user from the values in the auth hash schema.
  # See sessions#create_with_fitbit
  # @param hash. See User.find_from_hash.
  # @user user. The current user (assigned nil as default)
  ###
  def self.create_from_omniauth(auth)
    user = User.new
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["nickname"]
      user.oauth_token = auth['credentials']['token']
      user.oauth_secret = auth['credentials']['secret']
      user.save(:validate => false)
  end

  # Is the User linked with a Fitbit account?
  def linked_to_fitbit?
    oauth_token.present? && oauth_secret.present?
  end
  
  # Creates an instance of Fitgem::Client to access Fitbit API for 
  # the given user. 
  def fitbit_data
    raise "Account is not linked with a Fitbit account" unless linked_to_fitbit?
    @client ||= Fitgem::Client.new(
      :consumer_key => ENV["FITBIT_CONSUMER_KEY"],
      :consumer_secret => ENV["FITBIT_CONSUMER_SECRET"],
      :token => oauth_token,
      :secret => oauth_secret,
      :user_id => uid
    )
  end
  
  # Does the user have any Fitbit data?
  def has_fitbit_data?
    !@client.nil?
  end
  
#end User class
end
