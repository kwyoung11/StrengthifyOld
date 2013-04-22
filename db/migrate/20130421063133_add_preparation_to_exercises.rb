class AddPreparationToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :preparation, :text
  end
end
