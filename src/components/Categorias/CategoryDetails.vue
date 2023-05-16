<template>
    <div class="category-details padding-wrapper">
      <div v-if="category && subtopic">
        <h4 class="margin">{{ subtopic.title }}</h4>
        <h5 class="margin">Indicador poblacional</h5>
        <v-progress-linear  class="margin" color="deep-purple" height="10" :value="subtopic.pob_value" rounded></v-progress-linear>
        <h5 class="margin">Indicador de distancia</h5>
        <v-row class="padding-wrapper centered-col" >
          <v-col class="centered-col"> 
            <Grid :grid="subtopic.grid" />
          </v-col>
        </v-row>
      </div>
    </div>
</template>
  
<script>
export default {
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
</style>
  