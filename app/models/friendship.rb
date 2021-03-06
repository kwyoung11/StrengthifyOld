class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, :class_name => "User"
  has_one :notification, as: :notifiable, dependent: :destroy
  
  # Returns whether the current_user and a given 
  # other user are friends (true) or not (false).
  def self.are_friends(user, friend)
    f1 = find_by_user_id_and_friend_id(user, friend)
    f2 = find_by_user_id_and_friend_id(friend, user)
    return false if user == friend
    return true if f1.status == "accepted" && f2.status == "accepted" unless find_by_user_id_and_friend_id(user, friend).nil?
    return true if f1.status == "accepted" && f2.status == "accepted" unless find_by_user_id_and_friend_id(friend, user).nil?
    return false
  end

  def self.is_pending?(user, friend)
    f1 = find_by_user_id_and_friend_id(user, friend)
    f2 = find_by_user_id_and_friend_id(friend, user)
    return false if user == friend
    return true if f1.status == "pending" && f2.status == "requested" unless find_by_user_id_and_friend_id(user, friend).nil?
    return true if f1.status == "pending" && f2.status == "requested" unless find_by_user_id_and_friend_id(friend, user).nil?
    return false
  end

  def self.was_requested?(user, friend)
    f1 = find_by_user_id_and_friend_id(user, friend)
    f2 = find_by_user_id_and_friend_id(friend, user)
    return false if user == friend
    return true if f1.status == "requested" && f2.status == "pending" unless find_by_user_id_and_friend_id(user, friend).nil?
    return true if f1.status == "requested" && f2.status == "pending" unless find_by_user_id_and_friend_id(friend, user).nil?
    return false
  end

  def self.requester(friendship_id)
    friendship = Friendship.find(friendship_id) if Friendship.exists?(friendship_id)
    return User.find(friendship.user_id) unless friendship.nil?
  end

  def self.accepter(friendship_id)
    friendship = Friendship.find(friendship_id) if Friendship.exists?(friendship_id)
    return User.find(friendship.friend_id) unless friendship.nil?
  end
  
  # Records a friend request in the friendships table, placing
  # pending status for the user who requested the friendship, and 
  # request status for the user who received the friendship request.
  # @param user. The user who sent the friend request
  # @param friend. The user who received the friend request
  def self.request(user, friend)
    return false if are_friends(user, friend)
    return false if user == friend
    f1 = new(:user_id => user.id, :friend_id => friend.id, :status => "pending")
    f2 = new(:user_id => friend.id, :friend_id => user.id, :status => "requested")
    transaction do
      f1.save
      f2.save
    end
  end
  
  # Accepts a friend request
  def self.accept(user, friend)
    f1 = find_by_user_id_and_friend_id(user, friend)
    f2 = find_by_user_id_and_friend_id(friend, user)
    if f1.nil? or f2.nil?
      return false
    else
      transaction do
        f1.update_attributes(:status => "accepted")
        f2.update_attributes(:status => "accepted")
      end
    end
      return true
  end
  
  # Rejects a requested friendship
  def self.reject(user, friend)
     f1 = find_by_user_id_and_friend_id(user, friend)
     f2 = find_by_user_id_and_friend_id(friend, user)
     if f1.nil? or f2.nil?
       return false
     else
       transaction do
         f1.destroy
         f2.destroy
       end
     end
      return true
   end
  
  # Destroys a friendship (removing an already accepted friend)
  def self.destroy(user, friend)
    f1 = find_by_user_id_and_friend_id(user, friend)
    f2 = find_by_user_id_and_friend_id(friend, user)
    Notification.find_all_by_notifiable_id(f1.id).each do |n|
      n.destroy
    end
     if f1.nil? || f2.nil?
        return false
      else
        transaction do
          f1.destroy
          f2.destroy
        end
      end
      return true
  end
  
end