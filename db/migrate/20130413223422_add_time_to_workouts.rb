class AddTimeToWorkouts < ActiveRecord::Migration
  def change
    add_column :workouts, :hours, :integer
    add_column :workouts, :minutes, :integer
    add_column :workouts, :seconds, :integer
  end
end
