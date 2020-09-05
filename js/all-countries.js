google.charts.load("upcoming", {"packages":["geochart"]});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

	var data = google.visualization.arrayToDataTable([
		["Region"],
		["Austria"],
		["Bahamas"],
		["Belize"],
		["Bermuda"],
		["Canada"],
		["Denmark"],
		["Dominican Republic"],
		["France"],
		["Germany"],
		["Hungary"],
		["Ireland"],
		["Italy"],
		["Liechtenstein"],
		["Mexico"],
		["Morocco"],
		["Netherlands"],
		["Norway"],
		["Portugal"],
		["Slovenia"],
		["Slovakia"],
		["Sweden"],
		["Switzerland"],
		["United States"]
	]);

	var options = {};
	options["backgroundColor"] = "transparent";
	options["dataMode"] = "regions";
	options["defaultColor"] = "#3C9";

	var world = new google.visualization.GeoChart(document.getElementById("world"));
	world.draw(data, options);

	var europe = new google.visualization.GeoChart(document.getElementById("europe"));
	options["region"] = "150";
	europe.draw(data, options);
}
