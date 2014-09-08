class InvitationsController < ApplicationController
		
	def index 
	end

	def new
    @invitation = Invitation.new
  end

  def create
    @invitation = Invitation.new(invitation_params)
    @invitation.sender = current_user

    if @invitation.save
      if logged_in?
        UserMailer.deliver_invitation(current_user, @invitation).deliver 
        flash[:notice] = "You have successfully invited #{@invitation.recipient_email}. "
        redirect_to current_user
      else
        flash[:notice] = "Thanks! We'll send you an email when we're ready."
        redirect_to root_url
      end
    else
     render :action => 'new'
    end
  end

  def accept
    invitation = Invitation.find(params[:id])
    user = User.find(invitation.sender_id)
    invitee = User.find(invitation.recipient_id)

    if Invitation.accept(params[:id])
      flash[:notice] = "You have accepted the invitation by #{user.name}"
      @invitation = Invitation.where(sender_id: user, recipient_id: invitee)
      send_notification(user, @invitation, "invitation_accepted")
      UserMailer.invitation_accepted(user, invitee, @invitation).deliver
    else
      flash[:notice] = "The invitation with #{user.name} could not be accepted"
    end
    redirect_to current_user
  end

  def reject
    if Invitation.reject(params[:id])
      flash[:notice] = "The invitation from #{friend.name} has been denied"
    else
      flash[:notice] = "The invitation from #{friend.name} could not be denied"
    end
    redirect_to current_user
  end


 private
    # Use callbacks to share common setup or constraints between actions.
    def set_invitation
      @invitation = Invitation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def invitation_params
      params.require(:invitation).permit(:recipient_email, :name, :subject, :message)
    end


end
