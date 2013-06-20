class InviteFriendsController < ApplicationController
  def new
    @invite_friend = InviteFriend.new
    
    respond_to do |format|
      format.html
      format.js
    end
  end

  def create
    @invite_friend = InviteFriend.new(params[:invite_friend])

    if @invite_friend.valid?
        FriendMailer.invite_friend(current_user, @invite_friend).deliver 
        flash[:notice] = "You've sent a message inviting #{@invite_friend.email}. Do you think they'll join us? "
        redirect_to current_user
    else
      render :action => 'new'
    end
  end
  
  
end
