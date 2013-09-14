class AddPostIdToImages < ActiveRecord::Migration
  def change
    add_column :images, :post_id, :integer
  end
end
