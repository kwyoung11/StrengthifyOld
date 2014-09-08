class AddScheduledWorkoutKeyToWorkouts < ActiveRecord::Migration
  def change
    add_column :workouts, :scheduled_workout_id, :integer
  end
end
