class ChangeWorkoutCategoryFromStringToHstore < ActiveRecord::Migration
  def self.up
  	change_column :workouts, :category, 'character varying(255)[] USING CAST(category AS character varying(255)[])'
  end

  def self.down
  	change_column :workouts, :category, :string
  end
end
