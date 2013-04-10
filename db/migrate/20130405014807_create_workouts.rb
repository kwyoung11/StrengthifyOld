class CreateWorkouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
      t.string :exercise
      t.string :weight
      t.string :reps

      t.timestamps
    end
  end
end
