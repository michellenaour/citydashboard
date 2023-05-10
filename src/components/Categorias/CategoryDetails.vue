<template>
    <div class="padding-wrapper">
    <div class="category-details">
    <div v-if="category && subtopic">
        <h4>{{ category.title }}</h4>
        <p>{{ subtopic.title }}</p>
        <p>Indicador poblacional</p>
        <v-progress-linear color="deep-purple" height="10" :value="subtopic.pob_value" rounded></v-progress-linear> 
        <p>Indicador de distancia</p>
        <v-row class="padding-wrapper" justify="center" align="center">
        <v-col class="centered-col"> <Grid :grid="subtopic.grid" /></v-col>
        </v-row>
      
      <!-- Add more details or components related to the selected subtopic here -->
    </div>
    <div v-else>
      <p>No subtopic selected</p>
    </div>
  </div>
</div>

</template>
  
<script>
export default {
  props: {
    category: {
      type: Object,
      default: null
    },
    subtopic: {
      type: Object,
      default: null
    }
  },
  components: {
      Grid: () => import("@/components/Categorias/grid"),
  }
};
</script>
  
  <style scoped>
  
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
  
  .subtopic {
    padding: 5px;
    font-size: 14px;
  }
  </style>
  