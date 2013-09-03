class AddVisitedToUsers < ActiveRecord::Migration
  def change
    add_column :users, :visited, :integer, default: 0
  end
end
