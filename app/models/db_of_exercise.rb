class DbOfExercise < ActiveRecord::Base
	attr_accessible :name, :preparation, :execution, :category, :body_part, :muscle_groups, :equipment_type
end
