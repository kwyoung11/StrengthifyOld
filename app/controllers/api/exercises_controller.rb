class Api::ExercisesController < ApplicationController
  respond_to :json
 	require 'will_paginate/array'
	before_action :load_exercise, only: [:show, :add]
  before_action :load_workout, only: [:index]

  def index
    respond_with ExerciseDescription.all
  end

  def show
    respond_with ExerciseDescription.find(params[:id])
  end

  def create
    respond_with ExerciseDescription.create(params[:exercise])
  end

  def update
    respond_with ExerciseDescription.update(params[:exercise])
  end

  def destroy
    respond_with ExerciseDescription.destroy(params[:exercise])
  end

  def add
    # Remember the selected exercises
    session[:exercises] ||= []
    session[:exercises] << @exercise.id unless session[:exercises].include?(params[:id].to_i)
    @exercises = ExerciseDescription.all.where(id: session[:exercises])

    respond_to do |format|
      format.js
    end
  end

  def remove
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
    def load_exercise
      @exercise = ExerciseDescription.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def exercise_params
      params.require(:exercise).permit(:name, :preparation, :execution, :category, {:body_part => []}, :muscle_groups, :equipment_type, :skill_level, :force)
    end

    def load_workout
      session[:wrkt_name] = params[:wrkt_name] if params[:wrkt_name]
      session[:completed] = params[:completed] if params[:completed]
      session[:description] = params[:description] if params[:description]
      session[:created_at] = params[:created_at] if params[:created_at]
      session[:sets] = params[:sets] if params[:sets]
      session[:reps] ||= {}
      session[:reps].merge!( {params[:id] => params[:reps]} ) if params[:id] && params[:reps]
      session[:weight] ||= {}
      session[:weight].merge!( {params[:id] => params[:weight]} ) if (params[:id] && params[:weight])
      session[:rps] ||= {}
      session[:rps].merge!( {params[:id] => params[:rest_period]} ) if (params[:id] && params[:rest_period])
      @session_vars = { rest_period_seconds: session[:rps] }
      .merge( { exercises: session[:exercises] })
      .merge( { sets: session[:sets] })
      .merge( { weight: session[:weight] })
      .merge( { reps: session[:reps] })
      .merge( { completed: session[:completed] })
      .merge( { description: session[:description] })
      @selected_exercises = ExerciseDescription.all.where(id: session[:exercises])
      @workout = Workout.new
      @workout.name = session[:wrkt_name]
      @workout.sets = session[:sets]
      @workout.description = session[:description]
      @workout.created_at = session[:created_at]
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
