class WorkoutsController < ApplicationController
  before_action :set_workout, only: [:show, :edit, :update, :destroy]
  before_action :set_user
  before_filter :authorize

  # GET /workouts
  # GET /workouts.json
  def index
    @workouts = Workout.all
  end

  # GET /workouts/1
  # GET /workouts/1.json
  def show
    @workout = Workout.find(params[:id])
    
    respond_to do |format| 
      format.js { }
    end
    
  end

  # GET /workouts/new
  def new
    @workout = Workout.new
    @exercise = @workout.exercises.build
  end

  # GET /workouts/1/edit
  def edit
    @exercise = @workout.exercises
  end

  # POST /workouts
  # POST /workouts.json
  def create
    @workout = @user.workouts.new(workout_params)
    @exercise = @workout.exercises.new(params[:workout][:exercise])
    
    respond_to do |format|
      if @workout.save && @exercise.save
        
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
    @workout.update_attributes(params[:workout])
    
    respond_to do |format|
      if @workout.update(workout_params)
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
  
  # GET /workouts/analyze
  # GET /workouts/analyze.json
  def analyze
    if params[:metric] == "Time"
      @total_load_volume = Workout.select("date(created_at), sum(duration) as total_duration").group("date(created_at)").where(:user_id => @user.id).order("date(created_at) ASC")  
    elsif params[:metric] == "Reps"
      @total_load_volume = Workout.select("date(created_at), sum(reps) as total_reps").group("date(created_at)").where(:user_id => @user.id).order("date(created_at) ASC") 
    elsif params[:metric] == "Weight"
      @total_load_volume = Workout.select("date(created_at), sum(weight) as total_weight").group("date(created_at)").where(:user_id => @user.id).order("date(created_at) ASC") 
    elsif params[:metric] == "Sets"
      @total_load_volume = Workout.select("date(created_at), sum(sets) as total_sets").group("date(created_at)").where(:user_id => @user.id).order("date(created_at) ASC") 
    else
      @total_load_volume = Workout.select("date(created_at), sum(load_volume) as total_load_volume").group("date(created_at)").where(:user_id => @user.id).order("date(created_at) ASC")
    end
    respond_to do |format|
      format.html { render action: 'analyze', layout: false }
      format.js
      format.json { render json: @total_load_volume.map { |e| { date: e.date.strftime("%d"), load_volume: choose_metric(e, params[:metric])  } } }
    end
  end
  
  
  protected
  
  def choose_metric(ex, params)
    if params == "Time"
      ex.total_duration 
    elsif params == "Reps"
      ex.total_reps
    elsif params == "Weight"
      ex.total_weight
    elsif params == "Sets"
      ex.total_sets
    else
      ex.total_load_volume
    end
  end
  
  

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_workout
      @workout = Workout.find(params[:id])
    end
    
    def set_user
      @user = User.find(params[:user_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def workout_params
      params.require(:workout).permit! 
    end
end
