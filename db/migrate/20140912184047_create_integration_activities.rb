class CreateIntegrationActivities < ActiveRecord::Migration
  def change
    create_table :integration_activities do |t|
      t.integer :user_id
      t.integer :integration_id
      t.string :type
      t.integer :distance
      t.integer :duration
      t.integer :steps

      t.timestamps
    end
  end
end
