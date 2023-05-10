<template>
    <div>
      <canvas ref="canvas" id="myChart"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js'
  
  export default {
    props: {
      data: {
        type: Object,
        required: true
      },
      options: {
        type: Object,
        required: false,
        default: () => {}
      }
    },
    mounted () {
      const canvas = this.$refs.canvas;
      this.chart = new Chart(canvas, {
        type: 'radar',
        data: this.data,
        options: this.options
      })
    },
    beforeDestroy () {
      this.chart.destroy();
    }
  }
</script>

<style>
#myChart {
  width: 800px; /* adjust this value as needed */
  height: 800px; /* adjust this value as needed */
}
</style>
  