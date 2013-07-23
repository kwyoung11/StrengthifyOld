class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_filter :authorize, only: [:index, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.order(:name)
   
    @activities = Activity.order("created_at desc")

  end
  
  def find
    @users = User.search(params[:search]).order(:name).paginate(:per_page => 10, :page => params[:page])
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user_workouts = current_user.workouts.order("created_at desc").paginate(:per_page => 10, :page => params[:page])
    @user_challenges = current_user.challenges.order("created_at desc").paginate(:per_page => 10, :page => params[:page])
    @user.profile_views += 1 unless @user == current_user
    @user.save(validate: false)
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
      UserMailer.welcome_email(@user).deliver
      cookies[:auth_token] = @user.auth_token
        format.html { redirect_to @user, notice: "Welcome #{@user.name}! Now, get out there and pump some iron!" }
        format.json { render action: 'show', status: :created, location: @user }
      else
        format.html { render action: 'new' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: "Your all updated, #{@user.name}" }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :photo, :birthday, :about_me, :website, :city, :state, :country, :last_sign_in_at, :gender, :sign_in_count, :last_seen )
    end
end
