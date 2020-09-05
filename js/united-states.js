google.charts.load("upcoming", {"packages":["geochart"]});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

	var data = google.visualization.arrayToDataTable([
		["Region"],
		["Connecticut"],
		["Delaware"],
		["District of Columbia"],
		["Florida"],
		["Georgia"],
		["Illinois"],
		["Indiana"],
		["Maine"],
		["Maryland"],
		["Massachusetts"],
		["Missouri"],
		["New Hampshire"],
		["New Jersey"],
		["New Mexico"],
		["New York"],
		["North Carolina"],
		["Pennsylvania"],
		["Rhode Island"],
		["South Carolina"],
		["Texas"],
		["Vermont"],
		["Virginia"],
		["Washington"]
	]);

	var options = {};
	options["backgroundColor"] = "transparent";
	options["defaultColor"] = "#3C9";
	options["region"] = "US";
	options["resolution"] = "provinces";

	var chart = new google.visualization.GeoChart(document.getElementById("united-states"));

	chart.draw(data, options);
}
