class ChangeDefaultArrayValueForCategoryInWorkoutsTable < ActiveRecord::Migration
  def up
  	remove_column :workouts, :category, :string
  	add_column :workouts, :category, :string, array: true, default: "{}"
  end

  def down
  	change_column :workouts, :category, :string, array: true, default: '{}'
  end
end
