<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

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
  mounted() {
    this.renderChart();
  },
  beforeDestroy() {
    this.destroyChart();
  },
  watch: {
    data() {
      this.updateChart();
    }
  },
  methods: {
    renderChart() {
      const canvas = this.$refs.canvas;
      this.chart = new Chart(canvas, {
        type: 'radar',
        data: this.data,
        options: {
          ...this.options,
          animation: {
            duration: 0 // Desactivar la animación de actualización del gráfico
          }
        }
      });
    },
    updateChart() {
      this.chart.data = this.data;
      this.chart.update();
    },
    destroyChart() {
      this.chart.destroy();
    }
  }
};
</script>

<style>
canvas {
  width: 800px; /* Ajusta este valor según sea necesario */
  height: 800px; /* Ajusta este valor según sea necesario */
}
</style>
