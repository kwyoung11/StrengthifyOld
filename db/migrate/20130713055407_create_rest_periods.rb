class CreateRestPeriods < ActiveRecord::Migration
  def change
    create_table :rest_periods do |t|
      t.integer :minutes
      t.integer :seconds

      t.timestamps
    end
  end
end
