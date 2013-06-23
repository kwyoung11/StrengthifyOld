class AddPolymorphismToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :exerciseable_id, :integer
    add_column :exercises, :exerciseable_type, :string
  end
end
