class SessionsController < ApplicationController
  def new  
  end


  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      if params[:remember_me]
        cookies.permanent[:auth_token] = user.auth_token
      else
        cookies[:auth_token] = user.auth_token
      end
      redirect_to user_path(user.id), :notice => "Logged in!"
    else
      flash.now[:notice] = "Invalid email or password"
      render "new"
    end
  end
  
  def create_with_fitbit
    user = User.from_omniauth(request.env['omniauth.auth'])
    cookies[:auth_token] = user.auth_token
    redirect_to user_path(user.id), notice: "Signed in!"
  end

  def destroy
    cookies.delete(:auth_token)
    redirect_to root_url, :notice => "Logged out!"
  end
end
