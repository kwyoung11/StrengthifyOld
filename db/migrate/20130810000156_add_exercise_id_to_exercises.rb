class AddExerciseIdToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :exercise_id, :integer
  end
end
