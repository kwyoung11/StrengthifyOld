class ChangeInvitationFields < ActiveRecord::Migration
  def change
  	change_table :invitations do |t|
  		t.rename :user_id, :sender_id
  		t.string :recipient_email
  		t.rename :invitation_code, :token
  	end
  end
end
