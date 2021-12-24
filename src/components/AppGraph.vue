<template>
    <canvas id="chart"></canvas>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

export default {
  name: 'SearchIp',
    methods: {
      getIp() {
        axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures')
          .then((response) => {
            console.log(response.data.message);
          })
          .catch((e) => {
            alert(e);
          });
      },
      renderChart() {
        let ctx = document.getElementById("chart");
        new Chart(ctx, {
          type: 'line',
          data:{
            labels: ["1980", "1990", "2000", "2010", "2020"],
            datasets: [{
              label: '得票数',
              xAxisID: 'x',
              yAxisID: 'y',
              data: [12, 19, 3, 5, 2],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              x: {
                type: 'time',
                display: true,
                title: {
                  display: true,
                  text: 'Date'
                },
                ticks: {
                  major: {
                    enabled: true
                  }
                }
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'population'
              }
            }
          }
        }
      )},
    },
    mounted() {
        this.renderChart();
    },
}
</script>
