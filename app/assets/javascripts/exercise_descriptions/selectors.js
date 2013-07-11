$(document).ready(function() {
	// hide all body_part selectors initially
	$("#upper_body_selectors").hide();
	$("#lower_body_selectors").hide();
	$("#core_body_selectors").hide();

	// show/hide body_part selectors if category is checked
	if ($("#categories_Upper_Body").attr("checked") == "checked") {
		$("#upper_body_selectors").show();
	}
	if ($("#categories_Lower_Body").attr("checked") == "checked") {
		$("#lower_body_selectors").show();
	}
	if ($("#categories_Torso").attr("checked") == "checked") {
		$("#core_body_selectors").show();
	}

	// form submission on checkbox click
	$("#filter_exercises_by_category input").on('click', function() {
		$("#filter_exercises_by_category").submit();
	});

	$("#dropdown_container").on('click', function() {
		$("#filter_exercises_by_category").submit();
	});

	// for navigation
	// showHideOnClick("#skill_level_list_wrapper", "#skill_level_list");
	// showHideOnClick("#category_list_wrapper", "#category_list");
	// showHideOnClick("#force_list_wrapper", "#force_list");

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