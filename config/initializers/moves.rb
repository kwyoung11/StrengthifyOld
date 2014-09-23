Rails.application.config.middleware.use OmniAuth::Builder do
	configure do |config|
    config.path_prefix = '/auth'
  end

  # switch between dev and prod
  if Rails.env.production?
  	provider :moves, ENV['MOVES_KEY_PROD'], ENV['MOVES_SECRET_PROD']
  else
  	provider :moves, ENV['MOVES_KEY'], ENV['MOVES_SECRET']
  end

end