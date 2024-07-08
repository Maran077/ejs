import Chart from "chart.js/auto";

// Chart.register(ChartDataLabels);
const ctx = document.getElementById('dimensions').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Scope 1',
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: false,
      borderColor: '#fff',
      backgroundColor: ['#0054AD', '#0099D2', '#00C8CF'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
        },
        padding: 20,
      },
      tooltip: {
        enabled: true
      },
      datalabels: {
        formatter: (value, context) => {
          let sum = 0;
          const dataArr = context.chart.data.datasets[0].data;
          dataArr.forEach(data => {
            sum += data;
          });
          const percentage = (value * 100 / sum).toFixed(2) + "%";
          return percentage;
        },
        color: '#fff',
        font: {
          weight: 'bold'
        },
        anchor: 'center',
        align: 'center'
      }
    }
  }
});
