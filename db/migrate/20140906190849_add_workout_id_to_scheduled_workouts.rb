class AddWorkoutIdToScheduledWorkouts < ActiveRecord::Migration
  def change
    add_column :scheduled_workouts, :workout_id, :integer
  end
end
