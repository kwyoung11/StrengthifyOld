class User < ActiveRecord::Base
   attr_accessible :name, :email, :password, :password_confirmation
   
   
   # Database Relations 
   has_many :workouts, :dependent => :destroy
   
   # Validations 
   validates :name, presence: true
   validates :email, presence: true, uniqueness: true
   has_secure_password
   validates_presence_of :password, :on => :create, :on => :update
   
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
  
end
