class Exercise < ActiveRecord::Base  
  belongs_to :exerciseable, polymorphic: true
  has_one :rest_period
  accepts_nested_attributes_for :rest_period, :allow_destroy => true
  
  validates :name, presence: true
  validates :weight, presence: true
  validates :reps, presence: true
end
