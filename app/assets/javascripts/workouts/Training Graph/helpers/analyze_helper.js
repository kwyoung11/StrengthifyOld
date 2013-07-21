$(document).ready(function() {
	$("#time_scale li:last").addClass('current');
	$("#time_scale li").on("click", function() {
		$("#time_scale li").removeClass('current');
		$(this).addClass('current');
	});
});

$(document).ready(function() {

$("ul#time_scale li, #metric_select, #category_select").on('click change', function () {
	var category = $("#category_select option:selected").attr("value");
	var metric = $("#metric_select option:selected").attr("value");
	var time_scale = $("ul#time_scale li.current").text();
	var pElem = $('#chart_title');
	var children = pElem.children();

	pElem.append(children);
	var arrow = 
		$("#chart_title span:nth-child(1)").text(" " + metric + " ");
		$("#chart_title span:nth-child(3)").text(" " + category + " ");
		$("#chart_title span:nth-child(5)").text(" " + time_scale + " ");
});
});