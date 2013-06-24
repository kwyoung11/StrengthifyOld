class RemoveBodypartmusclegroupandequipmenttypeFromDbOfExercises < ActiveRecord::Migration
  def change
    remove_column :db_of_exercises, :body_part, :string
    remove_column :db_of_exercises, :muscle_group, :string
    remove_column :db_of_exercises, :equipment_type, :string
  end
end
