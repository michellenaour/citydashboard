<template>
  <div>
    <div class="grid-container">
      <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
        <div v-for="(color, colIndex) in row" :key="colIndex" :class="getSquareClass(color)"></div>
      </div>
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
        red: color == 0,
        green: color == 1
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
  opacity: 0.5; 
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.grid-container {
  position: relative;
  width: fit-content;
  height: fit-content;
  background-image: url("../../assets/map.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>


background-image: url("../../assets/map.png");