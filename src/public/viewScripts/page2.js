//  dataScope1Received, dataScope2Received, dataScope3Received --- are data from scopewise category wise data
//  for scope 1 , 2 and 3 respectively
// import dataScope1Received, dataScope2Received, dataScope3Received

const labels1 = dataScope1Received.data.map((obj) => {
    // return obj.categoryName;
    return obj.categoryCode;
});
const labels2 = dataScope2Received.data.map((obj) => {
    // return obj.categoryName;
    return obj.categoryCode;
});
const labels3 = dataScope3Received.data.map((obj) => {
    // return obj.categoryName;
    return obj.categoryCode;
});



const bar1 = document.getElementById("bar1").getContext("2d");
const myChart1 = new Chart(bar1, {
    type: "bar",
    data: {
        labels: labels1,
        datasets: [
            {
                label: 'Scope 1',
                data: dataScope1Received.data.map((obj) => {
                    return obj.value;
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: '#0054AD',
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
        labels: labels2,
        datasets: [
            {
                label: 'Scope 2',
                data: dataScope2Received.data.map((obj) => {
                    return obj.value;
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: '#0099D2',
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
        labels: labels3,
        datasets: [
            {
                label: 'Scope 3',
                data: dataScope3Received.data.map((obj) => {
                    return obj.value;
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: '#00C8CF',
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

