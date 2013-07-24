class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :set_timezone
  
  
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
  
  def admin?
    if !current_user.nil?
      redirect_to root_url, alert: "You are not authorized to view that page." if !current_user.admin?
    end
  end
  
  def current_user=(user)
    @current_user = user
    cookies[:auth_token] = user.auth_token
  end
  
  def set_timezone
    Time.zone = cookies["time_zone"]
  end

  def track_activity(trackable, action = params[:action])
    current_user.activities.create! action: action, trackable: trackable
  end

  def send_notification(user, notifiable, action = nil)
    user.notifications.create! action: action, notifiable: notifiable.first
  end
  
end
