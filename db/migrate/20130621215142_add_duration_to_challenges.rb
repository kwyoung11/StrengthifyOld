class AddDurationToChallenges < ActiveRecord::Migration
  def change
    add_column :challenges, :duration, :integer
  end
end
