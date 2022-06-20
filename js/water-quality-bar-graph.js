google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "% purity", { role: "style" }],
    ["Finland", 100, "#b87333"],
    ["US", 85, "silver"],
    ["Japan", 85, "gold"],
    ["France", 70, "color: #e5e4e2"],
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([
    0,
    1,
    { calc: "stringify", sourceColumn: 1, type: "string", role: "annotation" },
    2,
  ]);

  var options = {
    title: "Density of Precious Metals, in g/cm^3",
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
    backgroundColor: "transparent",
  };
  var chart = new google.visualization.ColumnChart(
    document.getElementById("columnchart_values")
  );
  chart.draw(view, options);
}

$(window).resize(function(){
  drawChart();
});
