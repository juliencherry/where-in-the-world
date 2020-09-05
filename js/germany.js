google.charts.load("upcoming", {"packages":["geochart"]});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

	var data = google.visualization.arrayToDataTable([
		["Region"],
		["Bayern"],
		["Berlin"],
		["Nordrhein-Westfalen"]
	]);

	var options = {};
	options["backgroundColor"] = "transparent";
	options["defaultColor"] = "#3C9";
	options["region"] = "DE";
	options["resolution"] = "provinces";

	var chart = new google.visualization.GeoChart(document.getElementById("germany"));

	chart.draw(data, options);
}
