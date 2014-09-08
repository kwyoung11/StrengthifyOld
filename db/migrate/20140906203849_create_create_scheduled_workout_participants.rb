class CreateCreateScheduledWorkoutParticipants < ActiveRecord::Migration
  def change
    create_table :scheduled_workout_participants do |t|
      t.integer :scheduled_workout_id
      t.integer :user_id

      t.timestamps
    end
  end
end
