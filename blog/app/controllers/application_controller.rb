class ApplicationController < ActionController::Base 
  protect_from_forgery
  helper_method :logged_in?
  helper_method :mobile_device?
  helper_method :current_status
  
  def current_status
    Status.last
  end
   
  protected
    def authenticate
      authenticate_or_request_with_http_basic do |username, password|
       username == ENV['USER_ID'] && password == ENV['PASSWORD']
      end
    end
    
    
  private
  def logged_in?
    not request.authorization.nil?
  end

end
