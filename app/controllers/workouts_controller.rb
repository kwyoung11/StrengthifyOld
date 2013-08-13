class WorkoutsController < ApplicationController
  before_action :set_workout, only: [:show, :edit, :snag, :perform, :update, :destroy]
  before_action :set_user
  before_filter :authorize
  include WorkoutsHelper

  # GET /workouts
  # GET /workouts.json
  def index
    @workouts = Workout.order("created_at desc").all
  end

  # GET /workouts/1
  # GET /workouts/1.json
  def show
    respond_to do |format| 
      format.html
      format.js
    end
  end

  # GET /workouts/new
  def new
    @workout = Workout.new
    @workout_action = "new"
    @exercise = @workout.exercises.build
    @exercise.rest_period = RestPeriod.new
  end

  # GET /workouts/1/edit
  def edit
    @exercise = @workout.exercises
  end

  # POST /workouts
  # POST /workouts.json
  def create
    @workout = @user.workouts.new(workout_params)
    
    respond_to do |format|
      if @workout.save
        track_activity @workout
        format.html { redirect_to perform_user_workout_path(current_user.id, @workout.id)} if @workout.planned == true
        format.html { redirect_to user_workouts_path(@user.id), notice: 'Workout was successfully created.' }
        format.json { render action: 'show', status: :created, location: @workout }
      else
        format.html { render action: 'new' }
        format.json { render json: @workout.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /workouts/1
  # PATCH/PUT /workouts/1.json
  def update
    
    respond_to do |format|
      if @workout.update_attributes(workout_params)
        format.html { redirect_to user_workouts_path(@user.id), notice: 'Workout was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @workout.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /workouts/1
  # DELETE /workouts/1.json
  def destroy
    @workout.destroy

    respond_to do |format|
      format.html { redirect_to user_workouts_path(@user.id) }
      format.json { head :no_content }
    end
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
  end

  def performable
    @planned_workouts = @user.workouts.where(planned: true)
  end
  
  
  private
    def workout_params
      params.require(:workout).permit(:snagged, :id, :user_id, :name, :created_at, :updated_at, :duration, :hours, :minutes, :seconds, :description, :sets, :category, :load_volume, :planned, exercises_attributes: [:id, :exercise_id, :name, :weight, :reps, :hours, :minutes, :seconds, :_destroy, rest_period_attributes: [:id, :minutes, :seconds, :_destroy]]) 
    end

    def set_workout
      @workout = Workout.find(params[:id])
    end

    def set_user
      @user = User.find(params[:user_id])
    end
 
end
