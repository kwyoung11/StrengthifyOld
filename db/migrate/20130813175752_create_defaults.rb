class CreateDefaults < ActiveRecord::Migration
  def change
    create_table :defaults do |t|
      t.references :user, index: true
      t.integer :weight
      t.integer :reps
      t.integer :exercise_seconds
      t.integer :rest_period_seconds

      t.timestamps
    end
  end
end
