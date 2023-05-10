<template>
  <div>
    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
      <div v-for="(color, colIndex) in row" :key="colIndex" :class="getSquareClass(color)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    grid: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getSquareClass(color) {
      return {
        square: true,
        red: color === 'red',
        green: color === 'green'
      };
    }
  }
};
</script>

<style>
.row {
  display: flex;
}

.square {
  width: 50px;
  height: 50px;
  margin: 5px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}
</style>
