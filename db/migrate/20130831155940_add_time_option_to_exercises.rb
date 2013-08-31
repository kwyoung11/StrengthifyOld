class AddTimeOptionToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :time_option, :string
  end
end
