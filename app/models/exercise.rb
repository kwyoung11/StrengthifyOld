class Exercise < ActiveRecord::Base  
  belongs_to :exerciseable, polymorphic: true
  
  validates :name, presence: true
  validates :weight, presence: true
  validates :reps, presence: true
end
