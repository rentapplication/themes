var ctx = document.getElementById("myChart");

var data = {

    datasets: [
        {
            data: [871, 627, 311, 767],

            backgroundColor: [
                "#61eecd",
                "#f8e81c",
                "#7ed321",
                "#5ab275"
            ]

                        
                        
        }]
};

var options = { 
    cutoutPercentage:70,
    responsive: true,
    tooltips: 
        {
            enabled:false,
        },
};


var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

