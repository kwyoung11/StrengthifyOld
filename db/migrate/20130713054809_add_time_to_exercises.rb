class AddTimeToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :hours, :integer
    add_column :exercises, :minutes, :integer
    add_column :exercises, :seconds, :integer
  end
end
