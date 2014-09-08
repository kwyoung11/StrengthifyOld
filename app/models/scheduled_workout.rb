class ScheduledWorkout < ActiveRecord::Base
	belongs_to :workout
	has_many :invitations, as: :invitable

	has_many :scheduled_workout_participations
	has_many :users, through: :scheduled_workout_participations


	def send_reminders
		@scheduled_workouts = ScheduledWorkout.where(scheduled_date: (Time.now.midnight - 1.day)..Time.now.midnight)
		@scheduled_workouts.each do |sw|
			UserMailer.workout_reminder(User.find(sw.scheduled_workout_participations.user_id), sw).deliver
		end
	end

	def ask_for_workout_confirmations
		@scheduled_workouts = ScheduledWorkout.where(scheduled_date: (Time.now.midnight - 2.day)..Time.now.midnight - 1.day)
		@scheduled_workouts.each do |sw|
			UserMailer.ask_for_workout_confirmations(User.find(sw.scheduled_workout_participations.user_id), sw).deliver
		end
	end
end
