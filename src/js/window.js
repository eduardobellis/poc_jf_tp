
var chart = null;

function drawChart() {
  chart = new Chart($('.chart'), {
    type: 'radar',
    data: marksData
    // options: chartOptions
  });
}

var chartOptions = {
  scale: {
    ticks: {
      suggestedMin: 0,
      suggestedMax: 7,
      stepSize: 0.05
    }
  },
  legend: {
    position: 'left'
  }
};

var marksData = {
  labels: ["CE", "CD", "Q", "AD", "P", "T", "SS"],
  datasets: [{
    label: "huguinho",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [2.20, 2.05, 2.20, 1.00, 2.95, 2.50, 3.00]
  }, {
    label: "ze",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [2.90, 2.45, 2.20, 2.25, 2.25, 1.25, 2.10]
  }]
};

$(() => {
  // setLastMeasureTimes(os.cpus());
  drawChart();
})