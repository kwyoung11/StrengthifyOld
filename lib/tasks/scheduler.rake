desc "This task is called by the Heroku scheduler add-on"

task :send_workout_reminders => :environment do
  ScheduledWorkout.send_reminders
end

task :ask_for_workout_confirmations => :environment do
	ScheduledWorkout.ask_for_workout_confirmations
end