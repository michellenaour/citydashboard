<style>
.padding-wrapper {
  padding: 16px;
}
</style>

<template>
  <div class="padding-wrapper">
    <radar-graph :data="chartData" :options="chartOptions"></radar-graph>
</div>
  </template>
  
  <script>
  import RadarGraph from './RadarGraph.vue'
  
  export default {
    components: {
      RadarGraph
    },
    data () {
      return {
        chartData: {
          labels: ['Salud', 'Movilidad', 'Educación', 'Deporte', 'Cultura', 'Áreas verdes'],
          datasets: [
            {
              label: 'Estado actual',
              backgroundColor: 'rgba(0, 119, 204, 0.2)',
              borderColor: 'rgba(0, 119, 204, 1)',
              pointBackgroundColor: 'rgba(0, 119, 204, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(0, 119, 204, 1)',
              data: [5, 4, 3, 6, 7, 8]
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scale: {
            ticks: {
              beginAtZero: true,
              max: 10
            }
          }
        }
      }
    }
  }
  </script>
  
  
