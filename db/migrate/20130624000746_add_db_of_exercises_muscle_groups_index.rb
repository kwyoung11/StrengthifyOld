class AddDbOfExercisesMuscleGroupsIndex < ActiveRecord::Migration
  def up
  	execute "CREATE INDEX db_of_exercises_muscle_groups ON db_of_exercises USING GIN(muscle_groups)"
  end

  def down
  	execute "DROP INDEX db_of_exercises_muscle_groups"
  end
end
