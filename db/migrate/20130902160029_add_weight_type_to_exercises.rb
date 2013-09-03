class AddWeightTypeToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :weight_type, :string, default: "lbs"
  end
end
