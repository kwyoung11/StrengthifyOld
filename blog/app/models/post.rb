class Post < ActiveRecord::Base
  attr_accessible :title, :body, :images_attributes, :published
  has_many :images, :dependent => :destroy
  accepts_nested_attributes_for :images, allow_destroy: true
end
