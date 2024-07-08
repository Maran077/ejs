const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Scope 1",
                data: [12, 19, 3, 5, 2, 3, 7],
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',

            },
        },
    }
});

