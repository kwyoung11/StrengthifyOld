class AddBodypartmusclegroupandequipmenttypeToDbOfExercise < ActiveRecord::Migration
  def change
  	execute "create extension hstore"
    add_column :db_of_exercises, :body_part, :string, array: true, default: '{}'
    add_column :db_of_exercises, :muscle_groups, :hstore
    add_column :db_of_exercises, :equipment_type, :string, array: true, default: '{}'
  end
end
