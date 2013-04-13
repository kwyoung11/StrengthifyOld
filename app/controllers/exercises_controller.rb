class ExercisesController < ApplicationController
  def index
    @exercises = Exercise.order(:name).where("name ilike?", "%#{params[:term]}%").where(:usable => true)
    render json: @exercises.map(&:name)
  end
end
