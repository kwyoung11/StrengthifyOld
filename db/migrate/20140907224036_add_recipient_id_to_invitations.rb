class AddRecipientIdToInvitations < ActiveRecord::Migration
  def change
    add_column :invitations, :recipient_id, :integer
  end
end
