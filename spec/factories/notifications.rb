# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :notification do
    user nil
    action "MyString"
    notifiable nil
    notifiable_type "MyString"
  end
end
