class Admin::ExercisesController < ApplicationController
  before_filter :admin?
  before_filter :authorize
  layout 'admin'
  
  # Updates exercise to use in public-facing database
  def update
     @exercise = Exercise.find(params[:id])
     @exercise.update_attributes(params[:exercise])

     redirect_to admin_workouts_path, notice: "Exercise is marked for use"
  end
  
end
