class HomeController < ApplicationController
  
  def index
  end

  def invite
  	@invitation = Invitation.find_by_invitation_code(params[:id])

  	@inviter = User.find(@invitation.user_id)
  	flash[:notice] = "Welcome, you've been invited by #{@inviter.name}."
  	render :index
  end
end
