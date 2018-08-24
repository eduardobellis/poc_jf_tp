
var chart = null;

function drawChart() {
  chart = new Chart($('.chart'), {
    type: 'radar',
    data: marksData,
    options: chartOptions
  });
}

var chartOptions = {
  scale: {
    ticks: {
      min: 0,
      max: 7
    }
  },
  legend: {
    position: 'left'
  }
};

var marksData = {
  labels: ["Coding Excellence", "Continuous Delivery", "Quality", "Architecture & Design", "Process", "Teamwork", "Soft skills"],
  datasets: [{
    label: "eduardobp",
    backgroundColor: "rgba(200,0,0,0.2)",
    // data: [2.20, 2.05, 2.20, 1.00, 2.95, 2.50, 3.00]
    data: [1, 2, 4, 1, 3, 5, 6]
  }, {
    label: "oelze",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [2, 3, 2, 4, 3, 1, 2]
  }]
};

$(() => {
  // setLastMeasureTimes(os.cpus());
  drawChart();
})