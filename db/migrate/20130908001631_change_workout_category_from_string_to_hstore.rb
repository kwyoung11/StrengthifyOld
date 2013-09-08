class ChangeWorkoutCategoryFromStringToHstore < ActiveRecord::Migration
  def self.up
  	change_column :workouts, :category, :string, array: true, default: '{}'
  end

  def self.down
  	change_column :workouts, :category, :string
  end
end
