class Admin::WorkoutsController < ApplicationController
  before_filter :admin?
  before_filter :authorize
  layout 'admin'
  
  def index
    @workouts = Workout.all
  end
  
  def show
    
  end
  
  def update
    @workout = Workout.find(params[:id])
    @exercise = Exercise.find(params[:id])
    @workout.update_attributes(params[:workout])
    @exercise.usable = params[:workout][:usable]
    
    redirect_to admin_workouts_path, notice: "Exercise is marked for use"
  end
  
end
