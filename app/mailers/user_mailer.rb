class UserMailer < ActionMailer::Base
  default from: "activeterps@gmail.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.password_reset.subject
  #
  def welcome_email(user)
    @user = user
    mail :to => user.email, :subject => "Hello there, and welcome to Strengthify"
  end
  
  def password_reset(user)
     @user = user
     mail :to => user.email, :subject => "Account Recovery - Strengthify"
  end

  def friendship_requested(user, friend)
    @user = user
    mail :to => friend.email, :subject => "You have a new item in your Strengthify inbox"
  end

  def friendship_accepted(user, friend)
    @friend = friend
    mail :to => user.email, :subject => "You have a new item in your Strengthify inbox"
  end

  def deliver_invitation(user, invitation)
    if user == "Strengthify"
      user_name = "Strengthify"
      user_email = "activeterps@gmail.com"
    else
      user_name = user.name
      user_email = user.email
    end
    @user_name = user_name
    @invitation = invitation
    mail( 
    to: invitation.recipient_email,
    from: %{"#{user_name}"},
    reply_to: user_email, 
    subject: invitation.subject, 
    message: invitation.message
    )
  end
end
