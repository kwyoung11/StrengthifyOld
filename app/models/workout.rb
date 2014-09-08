class Workout < ActiveRecord::Base
  has_many :exercises, as: :exerciseable
  has_many :glory_pts, as: :glorifiable, class_name: "Glory"
  has_one :activity, as: :trackable, dependent: :destroy
  belongs_to :user
  has_many :scheduled_workouts

  accepts_nested_attributes_for :exercises, :allow_destroy => true 

  before_create :load_volume
  before_create :set_time_if_blank
  before_save :convert_time_to_seconds
  before_create :convert_time_to_seconds
  before_create :determine_category_and_category_count
  
  
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
  self[:load_volume] = load_volume * self.sets unless self.sets.nil?
  return load_volume
 end

 def determine_category_and_category_count
  category_arr = []
  categories_performed = []
  category_counts = []
  category_hash = {}

  # Get the categories from each exercise
  self.exercises.each do |e|
    category_arr << e.exercise_description.category
  end
 
  # Filter out duplicate categories
  categories_performed = category_arr.uniq

  # Count the number of times that category appeared
  categories_performed.each do |c|
    category_counts << category_arr.count(c)
  end
  
  # Build a hash like category => category_count
  categories_performed.each_with_index do |c, i|
    category_hash[c] = category_counts[i]
  end

  # Sort the hash in descending order by category_count
  category_hash.sort {|a,b| b[1]<=>a[1]}

  # Order the categories_performed array
  sorted_categories = []
  category_hash.each_pair do |k, v|
    sorted_categories << k
  end

  sorted_categories.map!(&:to_s)
  category_counts.map!(&:to_s)
  self[:category] = sorted_categories
  self[:category_count] = category_counts
 end

 def self.categories
  return [['Full Body'], ['Lower Body'], ['Upper Body'], ['Chest'], ['Legs'], ['Arms'], ['Back'], ['Hips'], ['Shoulders']]
 end
  
end
