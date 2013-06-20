class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, :class_name => "User"
  
  attr_accessible :user_id, :friend_id, :status
  
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
  
end
__END__

