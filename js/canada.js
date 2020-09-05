google.charts.load("upcoming", {"packages":["geochart"]});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

	var data = google.visualization.arrayToDataTable([
		["Region"],
		["Quebec"],
		["Ontario"],
	]);

	var options = {};
	options["backgroundColor"] = "transparent";
	options["defaultColor"] = "#3C9";
	options["region"] = "CA";
	options["resolution"] = "provinces";

	var chart = new google.visualization.GeoChart(document.getElementById("canada"));

	chart.draw(data, options);
}
