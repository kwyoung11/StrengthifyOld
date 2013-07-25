class FriendMailer < ActionMailer::Base
  default from: "activeterps@gmail.com"
  
  def invite_friend(user, invite, invitation)
    @invite = invite
    @user = user
    @invitation = invitation
    mail( 
    to: user.email,
    from: %{"#{user.name}"},
    reply_to: user.email, 
    subject: invite.subject, 
    message: invite.message
    )
  end
end
