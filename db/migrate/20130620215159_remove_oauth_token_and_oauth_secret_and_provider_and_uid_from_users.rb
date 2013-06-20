class RemoveOauthTokenAndOauthSecretAndProviderAndUidFromUsers < ActiveRecord::Migration
  def up
  	remove_column :users, :oauth_token
  	remove_column :users, :oauth_secret
  	remove_column :users, :provider
  	remove_column :users, :uid
  end

  def down
  	add_column :users, :oauth_token, :string
  	add_column :users, :oauth_secret, :string
  	add_column :users, :provider, :string
  	add_column :users, :uid, :string
  end
end
