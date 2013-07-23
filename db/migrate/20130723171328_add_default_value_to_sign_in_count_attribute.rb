class AddDefaultValueToSignInCountAttribute < ActiveRecord::Migration
	def up
		change_column :users, :sign_in_count, :integer, :default => 0
	end
	
	def down
	    change_column :users, :sign_in_count, :integer, :default => nil
	end
end
