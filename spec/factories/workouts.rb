# spec/factories/contacts.rb

FactoryGirl.define do
  factory :workout do |f|
    f.name { Faker::Name.name }
  end
end