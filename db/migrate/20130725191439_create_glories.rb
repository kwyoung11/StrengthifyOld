class CreateGlories < ActiveRecord::Migration
  def change
    create_table :glories do |t|
      t.integer :giver_id, index: true
      t.integer :receiver_id
      t.integer :glorifiable_id
      t.string :glorifiable_type

      t.timestamps
    end
  end
end
