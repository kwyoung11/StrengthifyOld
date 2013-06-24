class AddNameToDbOfExercises < ActiveRecord::Migration
  def change
    add_column :db_of_exercises, :name, :string
  end
end
