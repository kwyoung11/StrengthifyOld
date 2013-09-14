class Image < ActiveRecord::Base
  attr_accessible :name, :file, :image
  belongs_to :post
  has_attached_file :file, :styles => { :thumb => "212x141>" }
end
