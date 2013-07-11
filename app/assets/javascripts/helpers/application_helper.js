function showHideOnClick(wrapper, el) {
		$(wrapper).on('click', function() {
			($(el).css("display") == "none") ? $(el).show() : $(el).hide();
		});
	}
