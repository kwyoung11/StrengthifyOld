class AddInvitableIdAndInvitableTypeToInvitations < ActiveRecord::Migration
  def change
    add_column :invitations, :invitable_id, :integer
    add_column :invitations, :invitable_type, :string
  end
end
