module ExerciseDescriptionsHelper

def determine_hide_or_show_instance_variables
	if params[:categories]["Upper Body"]
	  @upper_body_parts = "show_upper_body_selectors"
	end

	if params[:categories]["Lower Body"]
	  @lower_body_parts = "show_lower_body_selectors"
	end

	if params[:categories]["Torso"]
	  @core_body_parts = "show_core_selectors"
	end	
end

end
