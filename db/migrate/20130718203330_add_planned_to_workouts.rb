class AddPlannedToWorkouts < ActiveRecord::Migration
  def change
    add_column :workouts, :planned, :boolean
  end
end
