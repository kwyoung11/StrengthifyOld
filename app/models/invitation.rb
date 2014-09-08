class Invitation < ActiveRecord::Base
	attr_accessor :name, :subject, :message

	# Database Relations
	belongs_to :sender, class_name: "User"
	has_one :recipient, class_name: "User"
	belongs_to :invitable, polymorphic: true
  has_one :notification, as: :notifiable, dependent: :destroy

	validates_presence_of :recipient_email
	validate :recipient_is_not_registered
	validate :recipient_is_not_enque
	validate :sender_has_invitations, :if => :sender

	before_create :generate_token 
	before_create :decrement_sender_count, :if => :sender

	# the invitation sender
	def self.sender(invitation_id)
    invitation = Invitation.find(invitation_id) if Invitation.exists?(invitation_id)
    return User.find(invitation.sender_id) unless invitation.nil?
  end

  # the invitation accepter
  def self.accepter(invitation_id)
    invitation = Invitation.find(invitation_id) if Invitation.exists?(invitation_id)
    return User.find(invitation.invitable_id) unless invitation.nil?
  end

	# Accepts an invitation request
  def self.accept(id)
    invitation = Invitation.find(id)
    if invitation.nil? 
      return false
    else
      transaction do
        invitation.update_attributes(:status => "accepted")
      end
    end
      return true
  end
  
  # Rejects an invitation
  def self.reject(id)
    invitation = Invitation.find(id)
     if invitation.nil? 
       return false
     else
       transaction do
         invitation.destroy
       end
     end
      return true
   end
  
  # Destroys an invitation (removing an already accepted invitation)
  def self.destroy(id)
    invitation = Invitation.find(id)
    Notification.find_all_by_notifiable_id(invitation.id).each do |n|
      n.destroy
    end
     if invitation.nil? 
        return false
      else
        transaction do
          invitation.destroy
        end
      end
      return true
  end


private

	def recipient_is_not_registered
		errors.add :recipient_email, 'is already registered' if User.find_by(email: recipient_email) && invitable_type == "Invitation"
	end

	def recipient_is_not_enque 
		errors.add :recipient_email, "is already awaiting an invitation" if Invitation.find_by(recipient_email: recipient_email) && invitable_type == "Invitation"
	end

	def sender_has_invitations
		if sender.invitation_limit == 0 && invitable_type == "Invitation"
			errors.add_to_base 'You have reached your limit of invitations to send.'
		end
	end

  def generate_token
      self.token = Digest::SHA1.hexdigest([Time.now, rand].join)
  end

  def decrement_sender_count
  	sender.decrement! :invitation_limit if invitable_type == "Invitation"
  end

end
