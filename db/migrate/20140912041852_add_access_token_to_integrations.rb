class AddAccessTokenToIntegrations < ActiveRecord::Migration
  def change
    add_column :integrations, :access_token, :string
  end
end
