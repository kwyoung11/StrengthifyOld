class SessionsController < ApplicationController
  def new  
  end

  def activity
    user = User.find(params[:user_id])
    user.last_seen = params[:time]
    user.save(validate: false)

    respond_to do |format|
      format.js
    end
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      if params[:remember_me]
        cookies.permanent[:auth_token] = user.auth_token
      else
        cookies[:auth_token] = user.auth_token
      end
      user.last_sign_in_at = Time.now
      if user.sign_in_count.nil?
        user.sign_in_count = 1 
      else
        user.sign_in_count += 1
      end
      user.save!(validate: false)
      redirect_to user_path(user.id), :notice => "Logged in!"
    else
      flash.now[:notice] = "Invalid email or password"
      render "new"
    end
  end

  def destroy
    cookies.delete(:auth_token)
    redirect_to root_url, :notice => "Logged out!"
  end
end
