class ChallengesController < ApplicationController
  before_action :set_challenge, only: [:show, :edit, :update, :destroy]
  before_action :set_user
  before_filter :authorize

  # GET /challenges
  # GET /challenges.json
  def index
    @challenges = Challenge.all
  end

  # GET /challenges/1
  # GET /challenges/1.json
  def show
  end

  # GET /challenges/new
  def new
    session[:challenge_params] ||= {}
    @challenge = Challenge.new
  end

  # GET /challenges/1/edit
  def edit
    @challenge = Challenge.find(params[:id])
  end

  # POST /challenges
  # POST /challenges.json
  def create
    session[:challenge_params].deep_merge!(params[:challenge]) if params[:challenge]
    @challenge = @user.challenges.new(session[:challenge_params])
    @challenge.current_step = session[:challenge_step]
    if params[:back_button]
      @challenge.previous_step
    else
      @challenge.next_step 
    end
    session[:challenge_step] = @challenge.current_step
    render 'new'

    # respond_to do |format|
    #   if @challenge.save
    #     track_activity @challenge

    #     format.html { redirect_to @user, notice: 'Challenge was successfully created.' }
    #     format.json { render action: 'show', status: :created, location: @challenge }
    #   else
    #     format.html { render action: 'new' }
    #     format.json { render json: @challenge.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /challenges/1
  # PATCH/PUT /challenges/1.json
  def update
    respond_to do |format|
      if @challenge.update(challenge_params)
        format.html { redirect_to @challenge, notice: 'Challenge was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @challenge.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /challenges/1
  # DELETE /challenges/1.json
  def destroy
    @challenge.destroy
    
    respond_to do |format|
      format.html { redirect_to @user }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_challenge
      @challenge = Challenge.find(params[:id])
    end

    def set_user
      @user = User.find(params[:user_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def challenge_params
      params.require(:challenge).permit(:reps, :exercise, :duration, :hms_duration, :of_type)
    end
end
