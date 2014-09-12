class IntegrationsController < ApplicationController
	def authenticate
		raise env['omniauth.auth'].to_yaml
		info = env['omniauth.auth']
		@integration = Integration.new
		@integration.provider = info["provider"]
		@integration.uid = info["uid"]
		@integration.user_id = current_user.id
		@integration.access_token = info["credentials"]["token"]
		@integration.expires_at = info["credentials"]["expires_at"]
		@integration.refresh_token = info["credentials"]["refresh_token"]
		@integration.first_date = info["info"]["firstDate"]

		populate_activities(@integration)

		respond_to do |format|
			if @integration.save
				format.html { redirect_to current_user, notice: "The #{info["provider"].capitalize} integration was succesfully enabled." }
      else
        format.html { redirect_to current_user, notice: "The #{info["provider"].capitalize} integration was unsuccesful." }
      end
    end
	end

	def refresh_if_expired
		if expired?
		#Make a POST request to the access token url endpoint
		#https://api.moves-app.com/oauth/v1/access_token?grant_type=refresh_token&refresh_token=<refresh_token>&client_id=<client_id>&client_secret=<client_secret>
		#If the refresh token request succeeds, the old access token and refresh token is revoked and new ones are issued.
		# will need to persist new ones to database

		end

	end

	def expired?

	end

	def population_activities(integration)
		

	end

end