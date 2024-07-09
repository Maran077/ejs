// data2Received is - barchart data from facility comparision api
// import data2Received  

const Bar = document.getElementById("bar").getContext("2d");

const facilities = data2Received.map((obj) => {
    return obj?.organizationName;
});

const myBarChart = new Chart(Bar, {
    type: "bar",
    data: {
        labels: facilities,
        datasets: [
            {
                label: 'Scope 1',
                data: data2Received.map((obj) => {
                    return obj?.scope1;
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: '#0054AD',
            },
            {
                label: 'Scope 2',
                data: data2Received.map((obj) => {
                    return obj?.scope2;
                }),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: '#0099D2',
            },
            {
                label: 'Scope 3',
                data: data2Received.map((obj) => {
                    return obj?.scope3;
                }),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: '#00C8CF',
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                usePointStyle: true,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },

            },
        },
        categoryPercentage: 0.1,
    }
});


// line chart don't have api for this data, maybe like data2 
const Line = document.getElementById("line").getContext("2d");
const myLineChart = new Chart(Line, {
    type: "line",
    data: {
        labels: facilities,
        datasets: [
            {
                label: 'Dataset 1',
                data: [13, 22, 33, 14, 35, 16, 37, 28, 19],
                borderColor: 'blue',
                backgroundColor: 'blue',
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
        scales: {
            x: {
                grid: {
                    display: false,
                },

            },
        },
        categoryPercentage: 0.1,
    }
});



