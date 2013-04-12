# spec/models/workout.rb
require 'spec_helper'

describe Exercise do
  it "has a valid factory" do
     FactoryGirl.create(:exercise).should be_valid
  end
  it "is invalid without an exercise name" do 
    FactoryGirl.build(:exercise, name: nil).should_not be_valid
  end
  
  it "is invalid without a weight" do
    FactoryGirl.build(:exercise, weight: nil).should_not be_valid
  end
  
  it "is invalid without reps" do
    FactoryGirl.build(:exercise, reps: nil).should_not be_valid
  end
end