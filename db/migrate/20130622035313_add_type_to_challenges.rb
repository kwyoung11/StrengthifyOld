class AddTypeToChallenges < ActiveRecord::Migration
  def change
    add_column :challenges, :of_type, :string
  end
end
