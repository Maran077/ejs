const bar1 = document.getElementById("bar1").getContext("2d");
const myChart1 = new Chart(bar1, {
    type: "bar",
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



const bar2 = document.getElementById("bar2").getContext("2d");
const myChart2 = new Chart(bar2, {
    type: "bar",
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



const bar3 = document.getElementById("bar3").getContext("2d");
const myChart3 = new Chart(bar3, {
    type: "bar",
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

