class AddExerciseIdToRestPeriods < ActiveRecord::Migration
  def change
    add_column :rest_periods, :exercise_id, :integer
  end
end
