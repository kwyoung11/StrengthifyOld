class RemoveWorkoutidFromExercises < ActiveRecord::Migration
  def change
    remove_column :exercises, :workout_id, :integer
  end
end
