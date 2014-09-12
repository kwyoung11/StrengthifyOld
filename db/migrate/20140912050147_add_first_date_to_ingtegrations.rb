class AddFirstDateToIngtegrations < ActiveRecord::Migration
  def change
    add_column :integrations, :first_date, :string
  end
end
