class FriendshipsController < ApplicationController
  def create
    user = User.find(params[:user_id])
    friend = User.find(params[:friend_id])
    
    unless friend.nil?
      if Friendship.request(user, friend)
       flash[:notice] = "A friend request has been sent."
       redirect_to find_users_path
     else
       flash[:error] = "Unable to add friend."
       redirect_to find_users_path
      end
    end
  end
  
  def accept
    user = User.find(params[:user_id])
    friend = User.find(params[:friend_id])
    
      unless friend.nil?
        if Friendship.accept(user, friend)
          flash[:notice] = "Friendship with #{friend.name} accepted"
        else
          flash[:notice] = "Friendship with #{friend.name} cannot be accepted"
        end
      end
     redirect_to current_user
  end
  
  
  def reject
     user = User.find(params[:user_id])
     friend = User.find(params[:friend_id])
     
      unless friend.nil?
        if Friendship.reject(user, friend)
          flash[:notice] = "Friendship with #{friend.name} rejected"
        else
          flash[:notice] = "Friendship with #{friend.name} cannot be rejected"
        end
      end
     redirect_to current_user
  end

  def destroy
    @friendship = current_user.friendships.find(params[:id])
      @friendship.destroy
      flash[:notice] = "Removed friendship."
      redirect_to current_user
  end

end
