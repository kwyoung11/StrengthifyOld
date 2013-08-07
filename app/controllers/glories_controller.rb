class GloriesController < ApplicationController
	before_action :set_user

	def give
		@glory = Glory.new(glory_params)
		if Glory.find_all_glory_pts_given_by_user(params[:glory]).count > 0
			@alert_status = "multiple_pts_given"
			@glory.destroy
		elsif params[:glory][:giver_id] == params[:glory][:receiver_id]
			@alert_status = "self_pts_given"
			@glory.destroy
		else
			@glory.save
		end
		@glory_pts =  Glory.find_all_glory_pts(params[:glory]).count
		puts "#{@glory_pts}"

		respond_to do |format|
			format.js
		end
	end

	private
	def glory_params
		params.require(:glory).permit(:giver_id, :receiver_id, :glorifiable_id, :glorifiable_type)
	end

	def set_user
    @user = User.find(params[:glory][:receiver_id])
  end
end