class AddDateTimeToScheduledWorkouts < ActiveRecord::Migration
  def change
    add_column :scheduled_workouts, :scheduled_date, :datetime
  end
end
