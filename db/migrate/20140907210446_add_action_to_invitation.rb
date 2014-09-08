class AddActionToInvitation < ActiveRecord::Migration
  def change
    add_column :invitations, :action, :string
  end
end
