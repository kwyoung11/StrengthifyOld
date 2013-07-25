class CreateInvitations < ActiveRecord::Migration
  def change
    create_table :invitations do |t|
      t.belongs_to :user, index: true
      t.string :invitation_code

      t.timestamps
    end
  end
end
