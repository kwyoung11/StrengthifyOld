module UsersHelper

	def start_training(user)
		if user.workouts.count < 1
			content = content_tag(:p, "Start Your Training") 
			content += content_tag :p do 
				link_to('Post A Workout', new_user_workout_path(user.id))
			end
			content
		end
	end
end

