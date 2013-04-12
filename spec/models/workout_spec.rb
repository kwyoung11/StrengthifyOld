# spec/models/workout.rb
require 'spec_helper'

describe Workout do
  it "has a valid factory" do
     FactoryGirl.create(:workout).should be_valid
  end
  it "is invalid without a workoutname" do 
    FactoryGirl.build(:workout, name: nil).should_not be_valid
  end
end