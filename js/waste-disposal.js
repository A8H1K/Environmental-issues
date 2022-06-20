// Donut chart representing methods of waste disposal
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  // Data to be represented in Donut Chart
  var data = google.visualization.arrayToDataTable([
    ["Task", "Waste disposal"],
    ["landfill", 36],
    ["Open Dump", 33],
    ["Incineration", 11],
    ["Recycling", 13],
    ["Composting", 5],
  ]);
  //Attributes of the Bar Graph
  var options = {
    title: "Waste Disposal Methods",
    pieHole: 0.4,
    backgroundColor: "transparent",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("donutchart")
  );
  //Generating HTML & CSS based on data & attributes through google API
  chart.draw(data, options);
}
