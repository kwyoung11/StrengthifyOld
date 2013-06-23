class AddCompletedToChallenges < ActiveRecord::Migration
  def change
    add_column :challenges, :completed, :boolean
  end
end
