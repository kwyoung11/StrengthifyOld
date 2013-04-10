class Exercise < ActiveRecord::Base
  attr_accessible :name, :weight, :reps
  
  belongs_to :workout
  
  
  validates :name, presence: true
  validates :weight, presence: true
  validates :reps, presence: true
  
end
