class WorkoutsController < ApplicationController
  before_action :set_workout, only: [:show, :edit, :update, :destroy]
  before_action :set_user
  before_filter :authorize, only: [:index, :new, :edit, :create, :update, :destroy]

  # GET /workouts
  # GET /workouts.json
  def index
    @workouts = Workout.all
  end

  # GET /workouts/1
  # GET /workouts/1.json
  def show
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
