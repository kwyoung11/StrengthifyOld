class AddLoadVolumeToWorkouts < ActiveRecord::Migration
  def change
    add_column :workouts, :load_volume, :integer
  end
end
