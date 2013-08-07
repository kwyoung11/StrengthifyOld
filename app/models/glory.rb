class Glory < ActiveRecord::Base
	belongs_to :glorifiable, polymorphic: true
	scope :find_all_glory_pts_given_by_user, ->(params) { where(giver_id: params[:giver_id], receiver_id: params[:receiver_id], glorifiable_id: params[:glorifiable_id]) }
	scope :find_all_glory_pts, ->(params) { where(glorifiable_id: params[:glorifiable_id]) }
end
