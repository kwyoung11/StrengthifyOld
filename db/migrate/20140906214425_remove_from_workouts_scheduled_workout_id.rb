class RemoveFromWorkoutsScheduledWorkoutId < ActiveRecord::Migration
  def change
  	remove_column :workouts, :scheduled_workout_id, :integer
  end
end
