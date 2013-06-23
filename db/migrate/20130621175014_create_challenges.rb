class CreateChallenges < ActiveRecord::Migration
  def change
    create_table :challenges do |t|
      t.integer :reps
      t.string :exercise
      t.time :duration

      t.timestamps
    end
  end
end
