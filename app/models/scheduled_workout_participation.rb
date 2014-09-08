class ScheduledWorkoutParticipation < ActiveRecord::Base
	belongs_to :user
	belongs_to :scheduled_workouts
end
