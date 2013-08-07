$(document).on('ready page:load', function() {

  var togglePWord = function() {
    var wrap = $(".change-password"), link = $("#change-pword-link"), pword = "#user_password", pword_confirm = "#user_password_confirmation";
    if (wrap.css("opacity") == "1") {
      link.html("Change Password");
      $(pword, pword_confirm).attr("disabled", "disabled");
      wrap.css("opacity", "0.4");
    } else {
      link.html("Undo");
      $(pword, pword_confirm).removeAttr("disabled");
      $(pword).focus();
      wrap.css("opacity", "1");
    }
};


  // Bind to all invalid elements in form
  $('.new_user').bind('invalid', function(e) { 
     e.preventDefault();
  });
  
  // Check for full name
  $("#user_name").on('focusout', function() {
    var name = $(this).val().split(' ');
    if (name.length == 1 && name.length < 2 && name[0]) {
      $(this).setCustomValidity("Please provide your full name.");
    } else {
      $(this).setCustomValidity('');
    }
  });
  
  // Ensure password confirmation matches password
  $("#user_password_confirmation").on('focusout', function() {
    if ($(this).val() != $("#user_password").val()) {
      $(this).setCustomValidity("The password confirmation does not match.");
    } else {
      $(this).setCustomValidity('');
    }
  });

});