
$(function() {
  $('#nav li a[href="<%= escape_javascript request.path %>"]').parents('li').addClass('current');
});