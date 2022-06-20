// Bar Graph representing primary causes of air pollution
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  // Data to be represented in Bar graph
  var data = google.visualization.arrayToDataTable([
    ["Country", "% purity", { role: "style" }],
    ["Finland", 100, "#b87333"],
    ["US", 85, "silver"],
    ["Japan", 85, "gold"],
    ["France", 70, "color: #e5e4e2"],
    ["India", 65, "color: #b87333"],
    ["singapore", 60, "silver"],
    ["Canada", 50, "gold"],
    ["Australia", 50, "color: #e5e4e2"],
    ["Serbia", 45, "color: #b87333"],
    ["Hong Kong", 30, "silver"],
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([
    0,
    1,
    { calc: "stringify", sourceColumn: 1, type: "string", role: "annotation" },
    2,
  ]);

  //Attributes of the Bar Graph
  var options = {
    title: "Water Quality across different nations",
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
    backgroundColor: "transparent",
  };
  var chart = new google.visualization.ColumnChart(
    document.getElementById("columnchart_values")
  );
  //Generating HTML & CSS based on data & attributes through google API
  chart.draw(view, options);
}

$(window).resize(function(){
  drawChart();
});

