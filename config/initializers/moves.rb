Rails.application.config.middleware.use OmniAuth::Builder do
	# configure do |config|
 #    config.path_prefix = '/auth'
 #  end
  	provider :moves, ENV['MOVES_KEY'], ENV['MOVES_SECRET']
end