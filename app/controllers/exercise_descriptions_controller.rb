class ExerciseDescriptionsController < ApplicationController
	before_action :set_exercise_description, only: [:show, :build]
  before_action :load_workout, only: [:index]

  def index
    @workout_action = "build"
    @user = User.find(current_user.id)
    @default = @user.default
    @exercises = ExerciseDescription.all.paginate(:per_page => 20, :page => params[:page])
    @exercises = ExerciseDescription.search(params[:search]).paginate(:per_page => 20, :page => params[:page]) if params[:search]
    @exercises = ExerciseDescription.all.paginate(:per_page => 20, :page => params[:page])
    @exercises = @exercises.with_categories(params[:categories]) if params[:categories]
    @exercises = @exercises.with_body_parts(params[:body_parts]) if params[:body_parts] unless params[:categories].nil?
    @exercises = @exercises.with_skill_levels(params[:skill_level]) if params[:skill_level]
    @exercises = @exercises.with_forces(params[:forces]) if params[:forces]

    @all_categories, @checked_categories = ExerciseDescription.categories, nil
    @all_ubps, @checked_ubps = ExerciseDescription.upper_body_parts, nil
    @all_lbps, @checked_lbps = ExerciseDescription.lower_body_parts, nil
    @all_tbps, @checked_tbps = ExerciseDescription.torso_body_parts, nil
    @all_skill_levels, @checked_skill_levels = ExerciseDescription.skill_levels, nil
    @all_forces, @checked_forces = ExerciseDescription.forces, nil

    @checked_categories = params[:categories]
    @checked_ubps = params[:body_parts] unless params[:categories].nil?
    @checked_lbps = params[:body_parts] unless params[:categories].nil?
    @checked_tbps = params[:body_parts] unless params[:categories].nil?
    @checked_skill_levels = params[:skill_level]
    @checked_forces = params[:forces]

    if params[:categories]
      if !params[:categories].has_key?("Upper Body")
        @checked_ubps = nil
      end

      if !params[:categories].has_key?("Lower Body")
        @checked_lbps = nil
      end

      if !params[:categories].has_key?("Torso")
        @checked_tbps = nil
      end
    end

    @checked_categories = @checked_ubps = @checked_lbps = @checked_tbps = @checked_skill_levels = @checked_forces = nil if params[:clear_filters]
    
    if params[:show_filters]
      @checked_categories = @all_categories
      @checked_ubps = @all_ubps
      @checked_lbps = @all_lbps
      @checked_tbps = @all_tbps
      @checked_skill_levels = @all_skill_levels
      @checked_forces = @all_forces
    end

    @show_built_wrkt = "show" if params[:show_wrkt] 

    # remember settings from build and clear actions
    @exercise_ids = session[:exercises].nil? ? [] : session[:exercises] 
  end

  def show
  end

  def build
    # Remember the selected exercises
    session[:exercises] ||= []
    session[:exercises] << @exercise.id unless session[:exercises].include?(params[:id].to_i)
    @exercises = ExerciseDescription.all.where(id: session[:exercises])

    respond_to do |format|
      format.js
    end
  end

  def clear
    if params[:clear] == "remove-exercise" && !session[:exercises].nil?
      ex_id = params[:id].to_i 
      ex_id_index = session[:exercises].find_index(ex_id) 
      session[:exercises].slice!(ex_id_index)
      session[:sets] = 0 if session[:exercises].empty?
      session[:cleared_exercise] = ex_id
    elsif params[:clear] == "reset"
      session[:exercises] = nil
      session[:sets] = nil
      session[:rps] = nil
    elsif params[:defaults]
      session[:rps] = nil
      session[:reps] = nil
      session[:weight] = nil
    end
 
    respond_to do |format|
      format.js {}
      format.html { redirect_to action: "index"}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exercise_description
      @exercise = ExerciseDescription.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def exercise_description_params
      params.require(:exercise_description).permit(:name, :preparation, :execution, :category, {:body_part => []}, :muscle_groups, :equipment_type, :skill_level, :force)
    end

    def load_workout
      session[:sets] = params[:sets] if params[:sets]
      session[:reps] ||= {}
      session[:reps].merge!( {params[:id] => params[:reps]} ) if params[:id] && params[:reps]
      session[:weight] ||= {}
      session[:weight].merge!( {params[:id] => params[:weight]} ) if (params[:id] && params[:weight])
      session[:rps] ||= {}
      session[:rps].merge!( {params[:id] => params[:rest_period]} ) if (params[:id] && params[:rest_period])
      @session_vars = { :rest_period_seconds => session[:rps] }.merge({ :exercises => session[:exercises] }).merge({ :sets => session[:sets] }).merge( { weight: session[:weight] }).merge( { reps: session[:reps] })
      @selected_exercises = ExerciseDescription.all.where(id: session[:exercises])
      @workout = Workout.new
      @workout.sets = session[:sets]
      @workout.planned = true
      @selected_exercises.each do |e|
        @exercise = @workout.exercises.new({name: e.name, exercise_id: e.id, weight: params[:weight]})
        @exercise.weight = session[:weight].fetch(@exercise.exercise_id.to_s, 0)
        @exercise.reps = session[:reps].fetch(@exercise.exercise_id.to_s, 0)
        @exercise.rest_period = RestPeriod.new
        @exercise.rest_period.seconds = session[:rps].fetch(@exercise.exercise_id.to_s, 0)

      end
    end
end
