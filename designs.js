$(document).ready(function() {
// chooses grid height and width and forms a grid upon submission
$("#sizePicker").submit(function makeGrid(grid) {
	$("table tr").remove();
	var rows = $("#input_height").val();
	var cols = $("#input_width").val();

	for (var i = 0; i <= rows; i++) {
		$("table").append("<tr></tr>");
		for (var k = 0; k <= cols; k++) {
			$("tr:last").append("<td></td>");
			$("td").attr("class", "cells");
		}
	}
	grid.preventDefault();

	// color picker used to color cells
	$(".cells").click(function(event) {
		var paint = $("#colorPicker").val();
		$(event.target).css("background-color", paint);
	});
});
});