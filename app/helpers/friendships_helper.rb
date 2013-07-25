module FriendshipsHelper

	def determine_status(user)
		if Friendship.are_friends(current_user, user)
			return HTMLEntities.new.decode "&#10003; Friends"
		elsif Friendship.is_pending?(current_user, user)
			return "Pending ..."
		elsif Friendship.was_requested?(current_user, user)
			return "Requested ..."
		else
			return link_to('Add Friend', friendships_path(friend_id: user.id, user_id: current_user), :method => :post, confirm: "Are you sure you want to send a friend request to #{user.name}?", id: "add_friend")
		end

	end

	def show_friend_photo(friendship)
		if friendship.status == "accepted"
			content_tag :li, class: "user_photo" do 
				tooltip_for(friendship.friend.name) do
					concat link_to(image_tag(friendship.friend.photo_url(:mini_thumb).to_s), user_path(friendship.friend))
				end
			end
		end
	end

	def show_friend_finder_nav
	content = content_tag(:li, "Find Friends", class: "find-friends-link")
		content += content_tag :ul, class: "find-friend-actions" do
			content_tag(:li, link_to("Search Comm.", find_users_path, class: "search-community")) +
			content_tag(:li, link_to("Invite Friends", new_invitation_path, class: "invite-friends"))
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
    if friendship.status == "pending"
      return ("#{link_to 'Accept', accept_friendship_path(:id => friendship.id, :user_id => user, :friend_id => friend)}" + " #{link_to 'Reject', reject_friendship_path(:id => friendship.id, :user_id => user, :friend_id => friendship.friend)}").html_safe
    elsif friendship.status == "requested"
      return "pending"
    end
  end

end
