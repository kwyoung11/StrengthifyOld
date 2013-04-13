class ExercisesController < ApplicationController
  def index
    @exercises = Exercise.order(:name).where("name like?", "%#{params[:term]}%")
    render json: @exercises.map(&:name)
    
  end
  
  
  def update
    
  end
  
end
