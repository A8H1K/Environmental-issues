// 3D pie chart representing primary causes of air pollution
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  // Data to be represented in pie chart
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Dust & Constrution", 45],
    ["Waste Burning", 17],
    ["Transport", 14],
    ["Diesel generator", 9],
    ["Industries", 8],
    ["Domestic Cooking", 7],
  ]);

  //Attributes of the pie chart
  var options = {
    title: "Activities contrbuting to air pollution",
    is3D: true,
    legend: { position: "bottom" },
    backgroundColor: "transparent",
    left: 0,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart_3d") //Targeting div with id: piechart_3d (in index.html)
  );

  //Generating HTML & CSS based on data & attributes through google API
  chart.draw(data, options);
}

// 3D pie chart ends

