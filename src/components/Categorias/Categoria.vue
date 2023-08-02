<template>
  <div class="category-details padding-wrapper">
    <div v-if="category && subtopic">
      <h2 class="margin">{{ subtopic.title }}</h2>
      <p class="margin parag">{{ subtopic.description }}</p>
      <h5 class="margin">Indicador poblacional</h5>
      <p class="margin parag">{{ subtopic.medida_p }}</p>
      <div>
        <div
          class="toggle"
          @click="toggleState"
          @mouseenter="showText"
          @mouseleave="hideText"
        >
          <i class="mdi mdi-ruler" :class="{ active: isActive }"></i>
          <span v-if="showTooltip" class="tooltip">{{ subtopic.estandar_p }}</span>
        </div>
      </div>
      <v-progress-linear
        class="margin"
        color="deep-purple"
        height="10"
        :value="subtopic.pob_value"
        rounded
      ></v-progress-linear>
      <h5 class="margin">Indicador de distancia</h5>
      <p class="margin parag">{{ subtopic.medida_d }}</p>
      <v-row class="padding-wrapper centered-col">
        <v-col class="centered-col">
          <Grid :grid="subtopic.grid" />
        </v-col>
      </v-row>
      <v-row class="padding-wrapper centered-col">
        <v-col class="centered-col">
          <div class="legend">
            <div class="legend-item">
              <div class="green-square"></div>
              <span class="legend-text">Condición Cumplida</span>
            </div>
            <div class="legend-item">
              <div class="red-square"></div>
              <span class="legend-text">Condición No Cumplida</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      isActive: false,
      showTooltip: false,
      tooltipText: "Texto al pasar el cursor",
    };
  },
  props: {
    category: {
      type: Object,
      default: null,
    },
    subtopic: {
      type: Object,
      default: null,
    },
  },
  methods: {
    toggleState() {
      this.isActive = !this.isActive;
    },
    showText() {
      this.showTooltip = true;
    },
    hideText() {
      this.showTooltip = false;
    },
  },
  components: {
    Grid: () => import("@/components/Categorias/grid"),
  },
};
</script>

<style scoped>
.centered-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.padding-wrapper {
  padding: 16px;
}

.category-details {
  margin-top: 20px;
}

.title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}

.subtopics {
  margin-top: 10px;
}
.margin {
  margin-top: 10px;
}

.subtopic {
  padding: 5px;
  font-size: 14px;
}
.parag {
  font-size: 10px;
}
.legend {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.green-square {
  width: 20px;
  height: 20px;
  background-color: green;
  margin-right: 5px;
}

.red-square {
  width: 20px;
  height: 20px;
  background-color: red;
  margin-right: 5px;
}

.legend-text {
  font-size: 12px; /* Adjust the font size as desired */
}
.toggle {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #ccc;
  transition: background-color 0.3s ease;
}

.icon.active {
  background-color: #f00;
}

.tooltip {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.toggle:hover .tooltip {
  opacity: 1;
}
</style>
  
