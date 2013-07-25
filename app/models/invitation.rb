class Invitation < ActiveRecord::Base
	attr_accessor :name, :subject, :message

	# Database Relations
	belongs_to :sender, class_name: "User"
	has_one :recipient, class_name: "User"
	belongs_to :invitable, polymorphic: true

	before_create :generate_token

	validates_presence_of :recipient_email
	# validate :recipient_is_not_registered


private

	def recipient_is_not_registered
		errors.add :recipient_email, 'is already registered' if User.find_by(email: recipient_email)
	end

   def generate_token
       self.token = Digest::SHA1.hexdigest([Time.now, rand].join)
   end

end
