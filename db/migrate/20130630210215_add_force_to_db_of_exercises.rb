class AddForceToDbOfExercises < ActiveRecord::Migration
  def change
    add_column :db_of_exercises, :force, :string
  end
end
