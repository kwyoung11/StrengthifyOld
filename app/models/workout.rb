class Workout < ActiveRecord::Base
  has_many :exercises, as: :exerciseable
  has_one :activity, as: :trackable, dependent: :destroy
  belongs_to :user

  accepts_nested_attributes_for :exercises, :allow_destroy => true 



  before_create :load_volume
  before_create :set_time_if_blank
  before_save :convert_time_to_seconds
  before_create :convert_time_to_seconds
  
  
  def set_time_if_blank
    if ((!self[:hours].blank?) || (!self[:minutes].blank?) || (!self[:seconds].blank?))
      %w[hours minutes seconds].each { |attr| self[attr] = 00 if self[attr].blank? }
    end
  end
  
  def convert_time_to_seconds
    seconds = 0
      seconds += self.hours * (60**2) if !self[:hours].blank? 
      seconds += self.minutes * 60 if !self[:minutes].blank?
      seconds += self.seconds if !self[:seconds].blank?
    self[:duration] = seconds
  end
  

 def load_volume
   load_volume = 0;
   self.exercises.each do |e|
     load_volume += e.weight * e.reps
   end
  self[:load_volume] = load_volume
  return load_volume
 end
  
end
