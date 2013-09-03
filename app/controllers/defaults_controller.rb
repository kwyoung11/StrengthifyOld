class DefaultsController < ApplicationController
  before_action :set_default, only: [:show, :edit, :update, :destroy]
  before_action :set_user

  # GET /defaults
  # GET /defaults.json
  def index
    @defaults = Default.all
  end

  # GET /defaults/1
  # GET /defaults/1.json
  def show
  end

  # GET /defaults/new
  def new
    @default = Default.new
  end

  # GET /defaults/1/edit
  def edit
  end

  # POST /defaults
  # POST /defaults.json
  def create
    @default = Default.new(default_params)

    respond_to do |format|
      if @default.save
        format.html { redirect_to user_default_path(@user, @default), notice: 'Default was successfully created.' }
        format.json { render action: 'show', status: :created, location: @default }
      else
        format.html { render action: 'new' }
        format.json { render json: @default.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /defaults/1
  # PATCH/PUT /defaults/1.json
  def update
    respond_to do |format|
      if @default.update(default_params)
        format.html { redirect_to :back, notice: 'Defaults were successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @default.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /defaults/1
  # DELETE /defaults/1.json
  def destroy
    @default.destroy
    respond_to do |format|
      format.html { redirect_to user_defaults_url(@user) }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_default
      @default = Default.where(user_id: params[:user_id]).first
    end

    def set_user
      @user = User.find(params[:user_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def default_params
      params.require(:default).permit(:user_id, :weight, :reps, :exercise_seconds, :rest_period_seconds)
    end
end
