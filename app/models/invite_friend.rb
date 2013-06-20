class InviteFriend < MailForm::Base
  attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :subject, :validate => true

  attribute :message, :validate => true
  attribute :nickname,  :captcha  => true
end