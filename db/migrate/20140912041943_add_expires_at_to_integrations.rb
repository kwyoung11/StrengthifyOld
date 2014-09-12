class AddExpiresAtToIntegrations < ActiveRecord::Migration
  def change
    add_column :integrations, :expires_at, :string
  end
end
