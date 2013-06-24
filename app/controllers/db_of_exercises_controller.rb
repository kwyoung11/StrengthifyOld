class DbOfExercisesController < ApplicationController
	before_action :set_db_of_exercise, only: [:show]
  def index
  	@exercises = DbOfExercise.all
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
      params.require(:db_of_exercise).permit(:name, :preparation, :execution, :category, :body_part, :muscle_groups, :equipment_type)
    end
end
