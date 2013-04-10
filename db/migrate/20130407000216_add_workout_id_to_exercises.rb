class AddWorkoutIdToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :workout_id, :integer
    add_index :exercises, :workout_id
  end
end
