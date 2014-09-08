module ApplicationHelper
  
  # Builds an instance of the association record, grabbing ruby's 
  # object_id to generate a unique id. Calls fields_for to generate fields with
  # the association, the object, and an id.
  # Passes in data attributes of id and field to the link.
  # @name: The link text
  # @f: The form builder
  # @association: The name of the association
  def link_to_add_fields(name, f, association, parent_model, action, link_id)
     new_object = f.object.send(association).klass.new
     id = new_object.object_id
     fields = f.fields_for(association, new_object, child_index: id) do |builder|
       render("/#{parent_model}/#{action}/" + association.to_s.singularize + "_fields", f: builder)
     end
     link_to(name, '#', id: link_id, class: "workout-add-exercise-link", data: {id: id, fields: fields.gsub("\n", "")})
  end

  # replace removed link_to_function in rails4
  def link_to_function(name, *args, &block)
     html_options = args.extract_options!.symbolize_keys

     function = block_given? ? update_page(&block) : args[0] || ''
     onclick = "#{"#{html_options[:onclick]}; " if html_options[:onclick]}#{function}; return false;"
     href = html_options[:href] || '#'

     content_tag(:a, name, html_options.merge(:href => href, :onclick => onclick))
  end
   
  def link_to_submit(text, id = nil)
   id ||= "submit_link"
   link_to_function text, "$(this).closest('form').submit()", id: id
  end

  def determine_set_label(count)
    return count == nil ? " sets" : count == 1 ? " set" : " sets"
  end

  def find_ex_field_value(f, field, user, session)
    default_field = (field == :seconds && f.object.class == RestPeriod) ? ("rest_period_" << field.to_s) : (field == :seconds) ? ("exercise_" << field.to_s) : field
    if !(f.object.send(field) == 0) && (session.has_key?(default_field.to_sym)) 
      f.object.send(field)
    else
     user.default.send(default_field.to_sym) if !user.default.nil?
   end
  end

  def name
   link_to "Strength#{content_tag(:span, "ify", class: "fade1")}".html_safe, root_url, class: "strengthify-header-link"
  end

  def active?(cont = nil, action)
    if cont != nil
      if controller.action_name == action && controller.controller_name == cont
        return "active" 
      end
    end
  end

  def notifications
    count = current_user.notifications.where(seen: false).count
    state = count > 0 ? "notifications-present" : "notifications-absent"
    icon = count > 0 ? "icon-folder-open" : "icon-folder-close"
    notification_count = count unless (count == 0)
   "#{content_tag(:span, notification_count, class: "notification-count " + state)}".html_safe + "#{content_tag(:i, "", class: icon)}".html_safe
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

  def meta_keywords
    "Strength Training, Weightlifting, Resistance Training, Power Lifting, Muscular Development, Fitness, Health, Exercise"
  end
  
  def meta_description
    "Strengthify -- The easiest way to jumpstart your strength training."
  end

  def link_to_strengthify(text)
    Rails.env == "development" ? (link_to "#{text}", "http://localhost:3000") : (link_to "#{text}", "http://strengthify.com")
  end
    
end
