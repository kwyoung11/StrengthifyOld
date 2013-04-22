class Admin::ExercisesController < ApplicationController
  before_filter :admin?
  before_filter :authorize
  layout 'admin'
  
  def index
    # Getting all exercises where usable == true
    @exercises_db = Exercise.select("DISTINCT name, id").where(:usable => true).order(:name)
    
    # Querying exercises table for unique list of exercises where usable == nil 
    # (i.e., just created by a user)
    usable_names = []
    @usable_exercises = Exercise.select("DISTINCT name").where(:usable => [true, false])
    @usable_exercises.each do |ue|
      usable_names << ue.name
    end
    @exercises = Exercise.select('DISTINCT name, id').where(:usable => nil).where("name not in (?)", usable_names).order(:name).select('id')
  end
  
  def show
    
  end
  
  def edit 
    @exercise = Exercise.find(params[:id])
  end
  
  # Updates exercise to use in public-facing database
  def update
     @exercise = Exercise.find(params[:id])
     @exercise.update_attributes(params[:exercise])
     @exercise.usable = params[:exercise][:usable]
     
     redirect_to admin_exercises_path, notice: "Exercise is marked for use"
  end
  
  def add_exercise_to_db
     @exercise = Exercise.find(params[:exercise][:id])
     @exercise.update_attributes(params[:exercise])
     @exercise.usable = params[:exercise][:usable]
     
     redirect_to admin_exercises_path, notice: "Exercise is marked for use"
  end
  
end
