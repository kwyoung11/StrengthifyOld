class AddBodyPartToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :body_part, :string
  end
end
