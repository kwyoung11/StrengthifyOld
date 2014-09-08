class RenameScheduledWorkoutsParticipantsToScheduledWorkoutParticipations < ActiveRecord::Migration
  def change
  	rename_table :scheduled_workout_participants, :scheduled_workout_participations
  end
end
