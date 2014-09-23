class Integration < ActiveRecord::Base
	has_many :integration_activities

	def self.add_integration_activity(user, integration, data)
		data["summary"].each_with_index do |activity, i|
			@integration_activity = IntegrationActivity.new
			@integration_activity.integration_id = integration.id
			@integration_activity.user_id = user.id
			@integration_activity.activity_type = data["summary"][i]["activity"]
			@integration_activity.distance = data["summary"][i]["distance"]
			@integration_activity.duration = data["summary"][i]["duration"]
			@integration_activity.steps = data["summary"][i]["steps"]
			@integration_activity.date = data["date"]
			@integration_activity.save
		end
	end

	def self.enabled?(integration_provider, user)
		return user.integrations.find_by(provider: integration_provider)
	end
end
