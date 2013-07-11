class RenameDbOfExercisesToExerciseDescriptions < ActiveRecord::Migration
  def change
    rename_table :db_of_exercises, :exercise_descriptions
  end 
end
