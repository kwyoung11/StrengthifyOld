class RemoveFromScheduledWorkoutsUserIdAndWorkoutId < ActiveRecord::Migration
  def change
  	remove_column :scheduled_workouts, :user_id, :integer
  	remove_column :scheduled_workouts, :workout_id, :integer
  end
end
