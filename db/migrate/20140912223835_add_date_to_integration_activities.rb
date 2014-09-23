class AddDateToIntegrationActivities < ActiveRecord::Migration
  def change
    add_column :integration_activities, :date, :date
  end
end
