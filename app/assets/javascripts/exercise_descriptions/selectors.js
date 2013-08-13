$(document).on('ready page:load', function () {	
	// hide all body_part selectors initially
	$("#upper_body_selectors, #lower_body_selectors, #core_body_selectors").hide();

	// show/hide body_part selectors if category is checked
	if ($("#categories_Upper_Body, #categories_Lower_Body, #categories_Torso").attr("checked") == "checked") {
		$("#upper_body_selectors").show();
	}

	// form submission on checkbox click
	$("#filter_exercises_by_category input, #dropdown_container").on('click', function() {
		$("#filter_exercises_by_category").submit();
	});

	// show/hide filter selectors on click
	$("#filter_options li:first-child").on('click', function() {
		if ($("#filter_options li:first-child").attr("showing") == "false") {
			$("#skill_level_list, #category_list, #force_list").show();
			$("#filter_options li:first-child").css("background-color", "#999");
			$("#filter_options li:first-child").attr("showing", "true");
		} else {
			$("#skill_level_list, #category_list, #force_list").hide();
			$("#filter_options li:first-child").css("background-color", "#bbb");
			$("#filter_options li:first-child").attr("showing", "false");
		}
	});

	

});