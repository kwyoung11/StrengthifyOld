class IntegrationActivity < ActiveRecord::Base
	has_one :integration
	has_one :user
end
