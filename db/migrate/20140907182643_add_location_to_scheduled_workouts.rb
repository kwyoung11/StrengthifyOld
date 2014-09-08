class AddLocationToScheduledWorkouts < ActiveRecord::Migration
  def change
    add_column :scheduled_workouts, :location, :string
  end
end
