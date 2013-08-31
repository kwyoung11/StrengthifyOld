class HomeController < ApplicationController
	layout "landing"
	
  def index
    if logged_in?
      redirect_to users_path
    end
  end

  def invite
  	@invitation = Invitation.find_by_invitation_code(params[:id])

  	@inviter = User.find(@invitation.user_id)
  	flash[:notice] = "Welcome, you've been invited by #{@inviter.name}."
  	render :index
  end
end
