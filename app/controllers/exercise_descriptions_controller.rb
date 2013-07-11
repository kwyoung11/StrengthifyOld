class ExerciseDescriptionsController < ApplicationController
	before_action :set_exercise_description, only: [:show]
  def index
    @exercises = ExerciseDescription.all.paginate(:per_page => 20, :page => params[:page])
    @exercises = ExerciseDescription.search(params[:search]).paginate(:per_page => 20, :page => params[:page]) if params[:search]
    @exercises = ExerciseDescription.all.paginate(:per_page => 20, :page => params[:page])
    @exercises = @exercises.with_categories(params[:categories]) if params[:categories]
    @exercises = @exercises.with_body_parts(params[:body_parts]) if params[:body_parts] unless params[:categories].nil?
    
    @all_categories, @checked_categories = ExerciseDescription.categories, nil
    @all_ubps, @checked_ubps = ExerciseDescription.upper_body_parts, nil
    @all_lbps, @checked_lbps = ExerciseDescription.lower_body_parts, nil
    @all_tbps, @checked_tbps = ExerciseDescription.torso_body_parts, nil
    @all_skill_levels, @checked_skill_levels = ExerciseDescription.skill_levels, nil
    @all_forces, @checked_forces = ExerciseDescription.forces, nil

    @checked_categories = params[:categories]
    @checked_ubps = params[:body_parts] unless params[:categories].nil?
    @checked_lbps = params[:body_parts] unless params[:categories].nil?
    @checked_tbps = params[:body_parts] unless params[:categories].nil?
    @checked_skill_levels = params[:skill_levels]
    @checked_forces = params[:forces]

    if params[:categories]
      if !params[:categories].has_key?("Upper Body")
        @checked_ubps = nil
      end

      if !params[:categories].has_key?("Lower Body")
        @checked_lbps = nil
      end

      if !params[:categories].has_key?("Torso")
        @checked_tbps = nil
      end
    end
    
  end

  def show
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exercise_description
      @exercise = ExerciseDescription.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def exercise_description_params
      params.require(:exercise_description).permit(:name, :preparation, :execution, :category, {:body_part => []}, :muscle_groups, :equipment_type, :skill_level, :force)
    end
end
