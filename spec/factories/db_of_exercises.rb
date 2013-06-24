# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :db_of_exercise do
    preparation "MyText"
    execution "MyText"
    category "MyString"
    body_part "MyString"
    muscle_group "MyString"
    equipment_type "MyString"
  end
end
