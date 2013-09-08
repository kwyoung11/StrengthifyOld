class AddCategoryCountToWorkouts < ActiveRecord::Migration
  def change
    add_column :workouts, :category_count, :string, array: true, default: '{}'
  end
end
