class Admin::UsersController < ApplicationController
  before_filter :admin?
  before_filter :authorize
  layout 'admin'

  
  def index
  end
end
