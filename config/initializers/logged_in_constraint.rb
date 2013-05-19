class LoggedInConstraint
  def matches?(request)
    request.cookies['auth_token'].present?
  end
end