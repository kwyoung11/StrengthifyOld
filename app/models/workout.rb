class Workout < ActiveRecord::Base
  has_many :exercises, as: :exerciseable
  has_many :glory_pts, as: :glorifiable, class_name: "Glory"
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
      seconds += self.hours * (60**2) if !self[:hours].blank? 
      seconds += self.seconds if !self[:seconds].blank?
    self[:duration] = seconds
  end
  

 def load_volume
   load_volume = 0
   self.exercises.each do |e|
      weight = e.weight_type.downcase == "kgs" ? (e.weight*2.20462).to_i : e.weight
     load_volume += weight * e.reps unless e.reps.nil?
   end 
  self[:load_volume] = load_volume * self.sets
  return load_volume
 end

 def self.categories
  return [['Full Body'], ['Lower Body'], ['Upper Body'], ['Chest'], ['Legs'], ['Arms'], ['Back'], ['Hips'], ['Shoulders']]
 end
  
end
