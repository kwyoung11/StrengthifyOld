class RemoveExerciseWeightAndRepsFromWorkouts < ActiveRecord::Migration
  def change
    remove_column :workouts, :exercise
    remove_column :workouts, :weight
    remove_column :workouts, :reps
  end
end
