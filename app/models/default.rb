class Default < ActiveRecord::Base
  belongs_to :user

  validates_uniqueness_of :user_id, message: "You cannot create multiple defaults"
end
