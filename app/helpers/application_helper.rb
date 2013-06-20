module ApplicationHelper
  
  # Builds an instance of the association record, grabbing ruby's 
  # object_id to generate a unique id. Calls fields_for to generate fields with
  # the association, the object, and an id.
  # Passes in data attributes of id and field to the link.
  # @name param. The link text, ITC "Add Exercise"
  # @f param. The form builder
  # @association param. The name of the association
  def link_to_add_fields(name, f, association)
     new_object = f.object.send(association).klass.new
     id = new_object.object_id
     fields = f.fields_for(association, new_object, child_index: id) do |builder|
       render(association.to_s.singularize + "_fields", f: builder)
     end
     link_to(name, '#', class: "add_fields", data: {id: id, fields: fields.gsub("\n", "")})
   end
   
   def link_to_submit(text)
     link_to_function text, "$(this).closest('form').submit()", id: "submit_link"
   end

   def name_and_notifications
    "Strength#{content_tag(:span, "ify")}".html_safe + "#{content_tag(:i, "", class: "icon-chevron-down")}".html_safe
   end
   
end
