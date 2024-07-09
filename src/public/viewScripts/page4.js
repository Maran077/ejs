// no api for pie 1
const pie1 = document.getElementById("pie1").getContext("2d");
const myChart1 = new Chart(pie1, {
    type: "pie",
    data: {
        labels: ['Renewable energy', 'Contribution', 'Afforestation', 'Bio diversity', 'Bio diversity'],
        datasets: [
            {
                label: '# of Votes',
                data: [44, 44, 44, 44, 44],
                backgroundColor: ['#494373', '#58508D', '#755194', '#925196', '#BC5090'],
                borderWidth: 1,
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


//no api for pie 2  i.e inset and offset for each organization
const bar = document.getElementById("bar").getContext("2d");
const myChart2 = new Chart(bar, {
    type: "bar",
    data: {
        labels: ['offset', 'emissions'],
        datasets: [
            {
                label: '% of Votes',
                data: [67673, 42501],
                backgroundColor: ['#0054AD', '#0099D2'],
                borderWidth: 1,
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



