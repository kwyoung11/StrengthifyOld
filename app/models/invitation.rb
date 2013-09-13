class Invitation < ActiveRecord::Base
	attr_accessor :name, :subject, :message

	# Database Relations
	belongs_to :sender, class_name: "User"
	has_one :recipient, class_name: "User"
	belongs_to :invitable, polymorphic: true

	validates_presence_of :recipient_email
	validate :recipient_is_not_registered
	validate :recipient_is_not_enque
	validate :sender_has_invitations, :if => :sender

	before_create :generate_token
	before_create :decrement_sender_count, :if => :sender


private

	def recipient_is_not_registered
		errors.add :recipient_email, 'is already registered' if User.find_by(email: recipient_email)
	end

	def recipient_is_not_enque 
		errors.add :recipient_email, "is already awaiting an invitation" if Invitation.find_by(recipient_email: recipient_email)
	end

	def sender_has_invitations
		unless sender.invitation_limit > 0
			errors.add_to_base 'You have reached your limit of invitations to send.'
		end
	end

  def generate_token
      self.token = Digest::SHA1.hexdigest([Time.now, rand].join)
  end

  def decrement_sender_count
  	sender.decrement! :invitation_limit
  end

end
