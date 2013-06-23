# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :challenge do
    reps 1
    exercise "MyString"
    duration "2013-06-21 13:50:14"
  end
end
