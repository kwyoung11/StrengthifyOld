class AddSkillLevelToDbOfExercises < ActiveRecord::Migration
  def change
    add_column :db_of_exercises, :skill_level, :string
  end
end
