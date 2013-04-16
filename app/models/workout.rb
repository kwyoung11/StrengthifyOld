class Workout < ActiveRecord::Base
  attr_accessible :name, :exercises_attributes, :created_at
  
  has_many :exercises
  belongs_to :user
  accepts_nested_attributes_for :exercises, :allow_destroy => true
  
  validates :name, presence: true
  
  
 def load_volume
   load_volume = 0;
   self.exercises.each do |e|
     load_volume += e.weight * e.reps
   end
  return load_volume
 end
  
end
