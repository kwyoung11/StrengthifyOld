# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :create_scheduled_workout_participant, :class => 'CreateScheduledWorkoutParticipants' do
    scheduled_workout_id 1
    user_id 1
  end
end
