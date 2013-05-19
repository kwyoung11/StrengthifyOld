class Admin::UsersController < ApplicationController
  before_filter :admin?
  before_filter :authorize

  
  def index
  end
end
