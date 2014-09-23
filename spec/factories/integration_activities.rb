# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :integration_activity, :class => 'IntegrationActivities' do
    user_id 1
    integration_id 1
    type ""
    provider "MyString"
    distance 1
    duration 1
    steps 1
  end
end
