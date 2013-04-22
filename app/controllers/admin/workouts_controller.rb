class Admin::WorkoutsController < ApplicationController
  before_filter :admin?
  before_filter :authorize
  layout 'admin'
  
  def index
    @workouts = Workout.all
    usable_names = []
    @usable_exercises = Exercise.select("DISTINCT name").where(:usable => true)
     @usable_exercises.each do |ue|
       usable_names << ue.name
     end
    @exercises = Exercise.select('DISTINCT name, id').where(:usable => nil).where("name not in (?)", usable_names)
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
