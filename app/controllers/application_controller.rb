class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  private 
  
  def current_user
      @current_user ||= User.find_by_auth_token(cookies[:auth_token]) if cookies[:auth_token]
  end
  helper_method :current_user
  
  def logged_in?
   current_user != nil
  end
  helper_method :logged_in?
  
  def authorize
     redirect_to login_url, alert: "Sign up or login" if current_user.nil?
  end
  
end