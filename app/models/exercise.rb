class Exercise < ActiveRecord::Base
  attr_accessible :name, :weight, :reps, :usable, :preparation, :execution, :body_part, :exerciseable
  
  belongs_to :exerciseable, polymorphic: true
  
  
  validates :name, presence: true
  validates :weight, presence: true
  validates :reps, presence: true
  
end
