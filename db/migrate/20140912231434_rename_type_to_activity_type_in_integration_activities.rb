class RenameTypeToActivityTypeInIntegrationActivities < ActiveRecord::Migration
  def change
  	rename_column :integration_activities, :type, :activity_type
  end
end
