
var lineChart;
var lineChartData = [];

function makePieChart( div, value, color ) {
    var pieChart = new AmCharts.AmPieChart();
    pieChart.addLabel("50%", "45%", "" + value + "%", "middle", 20);
    pieChart.dataProvider = [{
        "title": "Label",
        "value": value,
        "color": color
    }, {
        "value": 100 - value,
        "color": "transparent"
    }];
    pieChart.titleField = "title";
    pieChart.valueField = "value";
    pieChart.outlineColor = "transparent";
    pieChart.outlineAlpha = 0.8;
    pieChart.outlineThickness = 1;
    pieChart.colorField = "color";
    pieChart.radius = "42%";
    pieChart.innerRadius = "60%";
    pieChart.labelsEnabled = false;
    pieChart.balloonText = "[[percents]]%";

    // WRITE
    pieChart.write(div);
}

var makeChart = function(percent){
    makePieChart('pie1', percent, '#3399cc');
};