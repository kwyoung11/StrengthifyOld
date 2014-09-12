class AddRefreshTokenToIntegrations < ActiveRecord::Migration
  def change
    add_column :integrations, :refresh_token, :string
  end
end
