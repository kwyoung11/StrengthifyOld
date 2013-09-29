class AddProfilesVisitedToUsers < ActiveRecord::Migration
  def change
    add_column :users, :profiles_visited, :string, array: true, default: "{}"
  end
end
