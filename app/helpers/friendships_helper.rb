module FriendshipsHelper

	def determine_status(user)
		user.friendships.each do |friendship| 
			if Friendship.are_friends(current_user, user) && friendship.friend == current_user
				return HTMLEntities.new.decode "&#10003; Friends"
			elsif friendship.status == "pending" && friendship.friend == current_user
				return "Pending ..."
			elsif friendship.status == "requested" && friendship.friend == current_user
				return "Requested ..."
			else
				return link_to('Add Friend', friendships_path(friend_id: user.id, user_id: current_user), :method => :post, id: "add_friend")
			end
		end
	end

	def show_friend_photo_and_tooltip(friendship)
		if friendship.status == "accepted"
			return content_tag :li, class: "user_photo" do 
				content = link_to(image_tag(friendship.friend.photo_url(:mini_thumb).to_s), user_path(friendship.friend))
				content += content_tag :div, class: "user_tooltip" do
					content_tag(:div, "", class: "tooltip_triangle") +
					friendship.friend.name
				end
				content
			end
		end
	end

	def show_friend_finder_nav
	content = content_tag(:li, "Find Friends", id: "find_friends_link")
		content += content_tag :ul, id: "friend_finder_actions" do
			content_tag(:li, link_to("Search Comm.", find_users_path, id: "search_community_link")) +
			content_tag(:li, link_to("Invite Friends", new_invite_friend_path, id: "invite_friends_link"))
		end
	content
	end

	def show_friendship_status(friendship)
		if friendship.status == "pending" || friendship.status == "requested"
			return content_tag :li do 
				("#{friendship.friend.name} " + friendship_status(current_user, friendship.friend, friendship)).html_safe
			end
		end
	end

	def friendship_status(user, friend, friendship)
    if friendship.status == "requested"
      return ("#{link_to 'Accept', accept_friendship_path(:user_id => user, :friend_id => friend)}" + " #{link_to 'Reject', reject_friendship_path(:user_id => user, :friend_id => friendship.friend)}").html_safe
    elsif friendship.status == "pending"
      return "pending"
    end
  end

end
