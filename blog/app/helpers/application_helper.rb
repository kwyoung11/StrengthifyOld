module ApplicationHelper 

  def logged_in?
    not request.authorization.nil?
  end
  
  def title
    if @post
      title = sanitize @post.title, :tags => %w()
    else
      title = "Kevin William Young"
    end
  end
  
  def meta_keywords
    meta_keywords = "Health, Fitness, Web Development"
    return meta_keywords
  end
  
  def meta_description
    if @post
      return title
    else
      return "Co-founder at Strengthify - Health and Fitness - Athlete"
    end
  end

  def name_and_notifications
   "Strength#{content_tag(:span, "ify")}".html_safe + "#{content_tag(:i, "", class: "icon-chevron-down")}".html_safe
  end
  
  
  
end



