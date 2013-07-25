module ApplicationHelper
  
  # Builds an instance of the association record, grabbing ruby's 
  # object_id to generate a unique id. Calls fields_for to generate fields with
  # the association, the object, and an id.
  # Passes in data attributes of id and field to the link.
  # @name: The link text
  # @f: The form builder
  # @association: The name of the association
  def link_to_add_fields(name, f, association, parent_model)
     new_object = f.object.send(association).klass.new
     id = new_object.object_id
     fields = f.fields_for(association, new_object, child_index: id) do |builder|
       render("/#{parent_model}/" + association.to_s.singularize + "_fields", f: builder)
     end
     link_to(name, '#', class: "workout-add-exercise-link", data: {id: id, fields: fields.gsub("\n", "")})
  end
   
  def link_to_submit(text, id = nil)
   id ||= "submit_link"
   link_to_function text, "$(this).closest('form').submit()", id: id
  end

  def name
   link_to "Strength#{content_tag(:span, "ify", class: "fade")}".html_safe, root_url, class: "strengthify-header-link"
  end

  def notifications
    notification_count = current_user.notifications.where(seen: false).count unless (current_user.notifications.where(seen: false).count == 0)
   "#{content_tag(:span, notification_count, class: "notification-count")}".html_safe + "#{content_tag(:i, "", class: "icon-chevron-down")}".html_safe
  end

  def format_duration_to_HMS(total_seconds)
   return if total_seconds.nil?
   seconds = total_seconds % 60
   minutes = (total_seconds / 60) % 60
   hours = total_seconds / (60 * 60)
   hours.to_s + ":" + format("%02d", minutes.to_s) + ":" + format("%02d", seconds.to_s)
  end

  def tooltip_for(text, &block)
    content = block_given? ? with_output_buffer(&block) : ""
    content_tag :div, class: "tooltip_wrapper" do
      content + content_tag(:div, content_tag(:div, "", class: "tooltip_triangle") + text, class: "helper_tooltip")
     end
  end
    
end
