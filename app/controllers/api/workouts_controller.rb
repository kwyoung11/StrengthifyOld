class Api::WorkoutsController < ApplicationController
  respond_to :json
  before_filter :authorize
  include WorkoutsHelper

  # GET /workouts
  # GET /workouts.json
  def index
    respond_with Workout.all
  end

  # GET /workouts/1
  # GET /workouts/1.json
  def show
    respond_with Workout.find(params[:id])
  end

  def create
    respond_with Workout.create(params[:workout])
  end

  def update
    respond_with Workout.update(params[:workout])
  end

  def destroy
    respond_with Workout.destroy(params[:workout])
  end

  # GET /workouts/analayze
  # GET /workouts/analayze.json
 def analyze
    respond_to do |format|
      format.json { render json: get_metric_data_with_category(params[:metric], params[:category], params[:time]) }
    end
  end

  # GET /workouts/1/snag
  # GET /workouts/1/snag.json
  def snag
    @workout.snagged = true
    @workout.created_at = Date.today
    @workout.updated_at = nil
    @workout.description = nil
    @exercise = @workout.exercises
  end

  # GET /workouts/1/perform
  # GET /workouts/1/perform.json
  def perform
    @exercise = @workout.exercises
  end

  def performable
    @planned_workouts = @user.workouts.where(planned: true).where(completed: false)
  end
  
  
private
  def workout_params
    params.require(:workout).permit(:category_count, :snagged, :completed, :id, :user_id, :name, :created_at, :updated_at, :duration, :hours, :minutes, :seconds, :description, :sets, :category, :load_volume, :planned, exercises_attributes: [:id, :exercise_id, :name, :weight, :reps, :hours, :minutes, :time_option, :seconds, :_destroy, rest_period_attributes: [:id, :minutes, :seconds, :_destroy]]) 
  end
 
end
