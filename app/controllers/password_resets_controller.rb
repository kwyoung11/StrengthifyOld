class PasswordResetsController < ApplicationController
  def new
  end
  
  # If valid email provided, sends the password reset email
  # Security: It appears to user as though email is always sent (harder to determine
  # if email was actually valid)
  def create
     user = User.find_by_email(params[:email])
     user.send_password_reset if user
     redirect_to root_url, :notice => "Check your email for password reset instructions"
  end
  
  def edit
     @user = User.find_by_password_reset_token!(params[:id])
  end
  
  def update 
    @user = User.find_by_password_reset_token!(params[:id])
    if @user.password_reset_sent_at < 2.hours.ago
       redirect_to new_password_reset_path, :alert => "Password reset has expired."
    elsif @user.update_attributes(params[:user])
       redirect_to root_url, :notice => "Password reset. Try logging in again."
    else
       render "edit"
    end
  end
  
end
