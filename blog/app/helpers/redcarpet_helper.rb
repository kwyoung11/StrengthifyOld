module RedcarpetHelper
  def markdown(text)
    options = {:autolink => true, :hard_wrap => true, :prettify => true, :fenced_code_blocks => true, :no_intra_emphasis => true, :underline => true}
    renderer = HTMLwithPygments.new
    markdown = Redcarpet::Markdown.new(renderer, options)
    markdown.render(text).html_safe
  end
end

class HTMLwithPygments < Redcarpet::Render::HTML
  def block_code(code, language)
    Pygments.css(:style => "monokai")
    Pygments.highlight(code, :lexer => language)
  end
  include Sprockets::Helpers::RailsHelper
   include Sprockets::Helpers::IsolatedHelper
   include ActionView::Helpers::UrlHelper

   def parse_media_link(link)
     puts link
     matches = link.match(/^([\w\d\.]+)(?:\|(\w+))?(?:\|([\w\s\d]+))?$/)
     {
         :id => matches[1],
         :size => (matches[2] || 'original').to_sym,
         :class => matches[3]

     } if matches
   end

   def image(link, title, alt_text)
     size = nil
     klass = nil

     if nil != (parse = parse_media_link(link))
       media = Image.find_by_id(parse[:id]) || Image.find_by_name(parse[:id])
       if media
         size = media.file.image_size(parse[:size])
         link = media.file.url(parse[:size])
         klass = parse[:class]
       end
     end

     image_tag(link, :size => size, :title => title, :alt => alt_text, :class => klass)
   end

   def link(link, title, content)
     klass = nil

     if nil != (parse = parse_media_link(link))
       media = Image.find_by_id(parse[:id]) || Image.find_by_name(parse[:id])
       if media
         link = media.file.url(parse[:size])
         klass = parse[:class]
       end
     end

     link_to(content, link, :title => title, :class => klass)
   end
  end
