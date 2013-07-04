class DbOfExercisesController < ApplicationController
	before_action :set_db_of_exercise, only: [:show]
  def index
    @exercises = DbOfExercise.all.paginate(:per_page => 20, :page => params[:page])
    @exercises = DbOfExercise.search(params[:search]).paginate(:per_page => 20, :page => params[:page]) if params[:search]
    @exercises = DbOfExercise.all.paginate(:per_page => 20, :page => params[:page])
    @exercises = @exercises.with_categories(params[:categories]) if params[:categories]
    @exercises = @exercises.with_body_parts(params[:body_parts]) if params[:body_parts] unless params[:categories].nil?
    
    @all_categories, @checked_categories = DbOfExercise.categories, nil
    @all_ubps, @checked_ubps = DbOfExercise.upper_body_parts, nil
    @all_lbps, @checked_lbps = DbOfExercise.lower_body_parts, nil
    @all_tbps, @checked_tbps = DbOfExercise.torso_body_parts, nil
    @all_skill_levels, @checked_skill_levels = DbOfExercise.skill_levels, nil
    @all_forces, @checked_forces = DbOfExercise.forces, nil

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
    def set_db_of_exercise
      @exercise = DbOfExercise.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def db_of_exercise_params
      params.require(:db_of_exercise).permit(:name, :preparation, :execution, :category, {:body_part => []}, :muscle_groups, :equipment_type, :skill_level, :force)
    end
end
