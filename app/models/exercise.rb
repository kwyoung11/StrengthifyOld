class Exercise < ActiveRecord::Base  
  belongs_to :exerciseable, polymorphic: true
  has_one :rest_period
  accepts_nested_attributes_for :rest_period, :allow_destroy => true
  before_create :convert_time_to_seconds
  
  validates :name, presence: true
  validates :weight, presence: true
  validate :at_least_one_of

  def convert_time_to_seconds
    seconds = 0
      seconds += self.hours * (60**2) if !self[:hours].blank? 
      seconds += self.minutes * 60 if !self[:minutes].blank?
      seconds += self.seconds if !self[:seconds].blank?
    self[:duration] = seconds
  end

  def at_least_one_of
  	if [self.reps, self.hours, self.minutes, self.seconds].compact.blank?
    errors[:base] << "Please choose either a rep or time value for each exercise."
  	end
	end
end
