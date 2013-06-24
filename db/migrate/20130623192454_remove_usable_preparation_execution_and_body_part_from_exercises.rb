class RemoveUsablePreparationExecutionAndBodyPartFromExercises < ActiveRecord::Migration
  def change
    remove_column :exercises, :usable, :string
    remove_column :exercises, :preparation, :string
    remove_column :exercises, :execution, :string
    remove_column :exercises, :body_part, :string
  end
end
