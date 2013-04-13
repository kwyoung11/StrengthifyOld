class AddUsableToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :usable, :boolean
  end
end
