class AddSnagCountToWorkouts < ActiveRecord::Migration
  def change
    add_column :workouts, :snag_count, :integer
  end
end
