class User < ActiveRecord::Base
  mount_uploader :photo, PhotoUploader
  
  # Database Relations 
  has_many :challenges
  has_many :activities
  has_many :workouts, :dependent => :destroy
  has_many :friendships
  has_many :friends, :through => :friendships
  has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id"
  has_many :inverse_friends, :through => :inverse_friendships, :source => :user
  
  # Validations 
  # has_secure_password set to false to allow omniauth login
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  has_secure_password(validations: false) 
  validates_presence_of :password, :on => :create, :on => :update
  validates_confirmation_of :password
  
  # Creates identificiation cookie for new users
  before_create { generate_token(:auth_token) }
  
  # Search users table in users#find action (for finding friends)
  def self.search(search)
    if search
      search = search.capitalize
      where('name LIKE ?', "%#{search}%")
    else
      scoped
    end
  end

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
