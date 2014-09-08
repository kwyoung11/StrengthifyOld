class AddUserIdToScheduledWorkouts < ActiveRecord::Migration
  def change
    add_column :scheduled_workouts, :user_id, :integer
  end
end
