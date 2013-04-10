class UserMailer < ActionMailer::Base
  default from: "activeterps@gmail.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.password_reset.subject
  #
  def welcome_email(user)
    @user = user
    @url  = "http://secret-ridge-1485.herokuapp.com/login"
    mail :to => user.email, :subject => "Welcome to Thews.io"
  end
  
  def password_reset(user)
     @user = user
     mail :to => user.email, :subject => "Password Reset"
  end
end
