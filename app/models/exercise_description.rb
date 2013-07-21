class ExerciseDescription < ActiveRecord::Base
  scope :with_skill_levels, ->(skill_level) { where(skill_level: skill_level.keys) }
  scope :with_categories, ->(categories) { where(category: categories.keys) }
  scope :with_body_parts, ->(body_parts) { where("ARRAY[?]::varchar[] && body_part", body_parts.keys) }
  scope :with_forces, ->(forces) { where(force: forces.keys) }


  def self.categories
    @all_categories = %w[Upper\ Body Lower\ Body Torso]
  end

  def self.upper_body_parts
    @all_upper_body_parts = %w[Arms Shoulders Chest Back]
  end

  def self.lower_body_parts
    @all_lower_body_parts = %w[Upper\ Legs Lower\ Legs Buttocks]
  end

  def self.torso_body_parts
    @all_torso_body_parts = %w[Abdominals Lower\ Back]
  end

  def self.skill_levels
    @all_skill_levels = %w[Beginner Intermediate Advanced]
  end

  def self.forces
    @all_forces = %w[Push Pull]
  end

  
  def self.search(term)
  	/\A(?<name>\w+\s*{0,2})?\s*(?<eq_type>\[\w+\])?\s*(?:[cC]at:)?(?<category>\s*[ULT][B])?\s*(?:BP:)?(?<body_part>\w+)?\s*(?:MG:)?(?<muscle_groups>\w+\s*\w+)?\z/i =~ term
  	name = name.titleize.prepend("%").concat("%") if name
  	eq_type = eq_type.gsub!(/[\[\]]/,'').capitalize.split(/\s*,\s*/) if eq_type
  	name_first = name.split(" ")[0].concat("%") if name
  	category = (category == "UB" ? "Upper Body" : category == "LB" ? "Lower Body" : "Torso")
  	muscle_groups = muscle_groups.prepend("%").concat("%") if muscle_groups
  	self.find_by_sql([%Q(
  		SELECT * FROM db_of_exercises 
  		WHERE (?) = ANY (equipment_type) 
  		OR name LIKE ? 
  		OR muscle_groups->'target' LIKE ? 
  		OR muscle_groups->'target' LIKE ?
  		OR category LIKE ?
  		OR (?) = ANY (body_part)
  		),
  		eq_type, name, name_first, muscle_groups, category, body_part])
  end

end
