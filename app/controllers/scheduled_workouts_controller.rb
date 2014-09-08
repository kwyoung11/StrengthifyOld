class ScheduledWorkoutsController < ApplicationController
  before_action :set_scheduled_workout, only: [:show, :edit, :update, :destroy]

  # GET /scheduled_workouts
  # GET /scheduled_workouts.json
  def index
    @scheduled_workouts = ScheduledWorkout.all
  end

  # GET /scheduled_workouts/1
  # GET /scheduled_workouts/1.json
  def show
  end

  # GET /scheduled_workouts/new
  def new
    @scheduled_workout = ScheduledWorkout.new
    @scheduled_workout.scheduled_workout_participations.build
  end

  # GET /scheduled_workouts/1/edit
  def edit
  end

  # POST /scheduled_workouts
  # POST /scheduled_workouts.json
  def create
    @scheduled_workout = ScheduledWorkout.new(scheduled_workout_params)

    respond_to do |format|
      if @scheduled_workout.save
        if params[:scheduled_workout][:invitations]
          params[:scheduled_workout][:invitations].each do |friend|
            friend = friend.to_i
            if friend > 0
              @friend = User.find(friend)
              current_user.sent_invitations.create! sender_id: current_user.id, recipient_email: @friend.email, recipient_id: @friend.id, invitable_type: "ScheduledWorkout", invitable_id: @scheduled_workout.id
              @invitation = Invitation.where(sender_id: current_user, recipient_id: @friend)               
              send_notification(@friend, @invitation, "create")
              UserMailer.scheduled_workout_invite(current_user, @friend, @scheduled_workout).deliver
            end
          end
        end
        @scheduled_workout.scheduled_workout_participations.create(scheduled_workout_id: @scheduled_workout.id, user_id: current_user.id)
        format.html { redirect_to @scheduled_workout, notice: 'Scheduled workout was successfully created.' }
        format.json { render action: 'show', status: :created, location: @scheduled_workout }
      else
        format.html { render action: 'new' }
        format.json { render json: @scheduled_workout.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /scheduled_workouts/1
  # PATCH/PUT /scheduled_workouts/1.json
  def update
    respond_to do |format|
      if @scheduled_workout.update(scheduled_workout_params)
        format.html { redirect_to @scheduled_workout, notice: 'Scheduled workout was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @scheduled_workout.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /scheduled_workouts/1
  # DELETE /scheduled_workouts/1.json
  def destroy
    @scheduled_workout.destroy
    respond_to do |format|
      format.html { redirect_to scheduled_workouts_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_scheduled_workout
      @scheduled_workout = ScheduledWorkout.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def scheduled_workout_params
      params.require(:scheduled_workout).permit(:scheduled_date, :workout_id, :location, :user_id, :scheduled_workout_id, :invitations => {})
    end
end
