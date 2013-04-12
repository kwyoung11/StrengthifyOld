# spec/factories/contacts.rb

FactoryGirl.define do
  factory :exercise do |f|
    f.name { Faker::Name.name }
    f.weight "100"
    f.reps "15"
  end
end