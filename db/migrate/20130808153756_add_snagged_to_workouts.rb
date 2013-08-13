class AddSnaggedToWorkouts < ActiveRecord::Migration
  def change
    add_column :workouts, :snagged, :boolean, default: false
  end
end
