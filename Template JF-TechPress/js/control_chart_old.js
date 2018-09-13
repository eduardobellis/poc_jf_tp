var randomScalingFactor = function() {
    return Math.round(Math.random() * 7);
};
var color = Chart.helpers.color;
var config = {
    type: 'radar',
    data: {
        labels: [['Coding','Excellence'], ['Continuous','Delivery'], 'Quality', ['Architecture &','Design'], 'Process', 'Teamwork', ['Soft', 'skills']],
        datasets: [{
            label: 'Dudu',
            backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
            borderColor: window.chartColors.red,
            pointBackgroundColor: window.chartColors.red,
            data: [2.20, 2.05, 2.20, 1.00, 2.95, 2.50, 3.00]
        // }, {
        //     label: 'Oelze',
        //     backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
        //     borderColor: window.chartColors.blue,
        //     pointBackgroundColor: window.chartColors.blue,
        //     data: [2.90, 2.45, 2.20, 2.25, 2.25, 1.25, 2.10]
        }
    ]
    },
    options: {
        legend: {
            position: 'none',
        },
        title: {
            display: true,
            text: 'Experimento 7x7',
            fontSize: 25
        },
        scale: {
            ticks: {
                beginAtZero: true,
                fontSize: 15,
                min: 0,
                max: 7
            },
            pointLabels:{
                fontSize: 30,
                fontColor: 'ff0000'
            },
        }
    }
};
window.onload = function() {
    window.myRadar = new Chart(document.getElementById('canvas'), config);
};

var colorNames = Object.keys(window.chartColors);

