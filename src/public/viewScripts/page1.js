// data1Received is ----- ScopeWiseDistribution data 


const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ['Scope 1', 'Scope 2', 'Scope 3'],
        datasets: [
            {
                label: '# of Scope',
                data: [data1Recived?.scope1, data1Recived?.scope2, data1Recived?.scope3],
                backgroundColor: ['#0054AD', '#0099D2', '#00C8CF'],
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'down',

            },
        },
    }
});

