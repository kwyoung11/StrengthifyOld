class AddExecutionToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :execution, :text
  end
end
