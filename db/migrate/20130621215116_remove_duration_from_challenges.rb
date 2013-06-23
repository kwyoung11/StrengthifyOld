class RemoveDurationFromChallenges < ActiveRecord::Migration
  def change
    remove_column :challenges, :duration, :time
  end
end
