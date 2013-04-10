class Exercise < ActiveRecord::Base
  attr_accessible :name, :weight, :reps
  
  belongs_to :workout
end
