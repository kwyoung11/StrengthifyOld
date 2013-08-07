# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :glory do
    giver_id 1
    receiver_id 1
    glorifiable_id 1
    glorifiable_type "MyString"
    references ""
  end
end
