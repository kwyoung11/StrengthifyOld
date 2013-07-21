class Challenge < ActiveRecord::Base
	belongs_to :user
	has_many :exercises, as: :exerciseable
	has_one :baseline
	has_one :activity, as: :trackable, dependent: :destroy
	accepts_nested_attributes_for :baseline, allow_destroy: true

	attr_accessor :hms_duration
	attr_writer :current_step
	before_create :format_duration_to_seconds



	

	validates_format_of :hms_duration, with: /\A(\d{0,2})\s*:\s*([0-5]{0,1}[0-9]{0,1})\s*:\s*([0-5]{0,1}[0-9]{0,1})\z/, 
																message: "must be in HH:MM:SS format", 
																allow_blank: true
																
	def format_duration_to_seconds
		/^(?<hours>\d{0,2})\s*:\s*(?<minutes>[0-5]{0,1}[0-9]{0,1})\s*:\s*(?<seconds>[0-5]{0,1}[0-9]{0,1})$/ =~ hms_duration
		hours_in_s, minutes_in_s = format("%1d", hours).to_i * 60 * 60, format("%1d", minutes).to_i * 60
		self.duration = hours_in_s + minutes_in_s + format("%1d", seconds).to_i
	end

	def steps
		%w[challenge_type exercises baseline challenge]
	end

	def current_step
		@current_step || steps.first
	end

	def next_step
		self.current_step = steps[steps.index(current_step)+1]
	end

	def previous_step
		self.current_step = steps[steps.index(current_step)-1]
	end

	def first_step?
		current_step == steps.first
	end
	
end
