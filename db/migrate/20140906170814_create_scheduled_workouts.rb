class CreateScheduledWorkouts < ActiveRecord::Migration
  def change
    create_table :scheduled_workouts do |t|

      t.timestamps
    end
  end
end
