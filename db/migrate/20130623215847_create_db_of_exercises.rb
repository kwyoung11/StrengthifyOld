class CreateDbOfExercises < ActiveRecord::Migration
  def change
    create_table :db_of_exercises do |t|
      t.text :preparation
      t.text :execution
      t.string :category
      t.string :body_part
      t.string :muscle_group
      t.string :equipment_type

      t.timestamps
    end
  end
end
