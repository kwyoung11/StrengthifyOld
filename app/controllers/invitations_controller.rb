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
