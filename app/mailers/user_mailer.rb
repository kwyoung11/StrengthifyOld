class UserMailer < ActionMailer::Base
  default from: "activeterps@gmail.com"
  add_template_helper(ApplicationHelper)

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.password_reset.subject
  #
  def welcome_email(user)
    @user = user
    mail :to => user.email, :subject => "Welcome to Strengthify"
  end
  
  def password_reset(user)
     @user = user
     mail :to => user.email, :subject => "Account Recovery - Strengthify"
  end

  def friendship_requested(user, friend)
    @user = user
    mail :to => friend.email, :subject => "#{user.name} has requested to be friends with you"
  end

  def friendship_accepted(user, friend)
    @friend = friend
    mail :to => user.email, :subject => "#{friend.name} has accepted your friend request"
  end

  def invitation_accepted(user, friend, invitation)
    @friend = friend
    @invitation = invitation
    mail :to => user.email, :subject => "#{friend.name} has accepted your invitation"
  end

  def workout_reminder(user, scheduled_workout)
    @user = user
    @scheduled_workout = scheduled_workout
    mail :to => user.email, :subject => "Your workout #{scheduled_workout.workout.name} is at #{scheduled_workout.scheduled_date.strftime('%l%p')} today"
  end

  def ask_for_workout_confirmations(user, scheduled_workout)
    @user = user
    @scheduled_workout = scheduled_workout
    mail :to => user.email, :subject => "Let us know if you completed the workout #{scheduled_workout.workout.name} yesterday"
  end

  def new_feature_email(user, feature)
    @user = user
    mail :to => user.email, :subject => "New Feature: " + feature
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

  def scheduled_workout_invite(user, invitee, scheduled_workout)
    @scheduled_workout, @invitee, @user = scheduled_workout, invitee, user
    mail :to => invitee.email, :subject => "You've been invited to join #{user.name} for a workout"
  end
end
