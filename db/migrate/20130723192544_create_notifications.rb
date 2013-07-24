class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.belongs_to :user, index: true
      t.string :action
      t.belongs_to :notifiable, index: true
      t.string :notifiable_type

      t.timestamps
    end
  end
end
