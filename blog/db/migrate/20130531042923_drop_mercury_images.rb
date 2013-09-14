class DropMercuryImages < ActiveRecord::Migration
  def up
    drop_table :mercury_images
  end

  def down
  end
end
