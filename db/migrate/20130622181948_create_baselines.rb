class CreateBaselines < ActiveRecord::Migration
  def change
    create_table :baselines do |t|
      t.integer :challenge_id
      t.integer :reps
      t.integer :duration

      t.timestamps
    end
  end
end
