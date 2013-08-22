# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :default do
    user nil
    weight 1
    reps 1
    exercise_seconds 1
    rest_period_seconds 1
  end
end
