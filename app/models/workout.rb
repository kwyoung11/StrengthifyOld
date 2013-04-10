class Workout < ActiveRecord::Base
  attr_accessible :name, :exercises_attributes, :created_at
  
  has_many :exercises
  belongs_to :user
  accepts_nested_attributes_for :exercises, :allow_destroy => true
end
