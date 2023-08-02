<template>
  <div class="full-width-container" >
    <v-card class="full-width-card">
      <v-tabs
        v-model="tab"
        background-color="deep-purple accent-4"
        centered
        dark
        icons-and-text
        class="full-width-tabs"
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-1">
          Categorias
          <v-icon>mdi-chart-areaspline</v-icon>
        </v-tab>
        <v-tab href="#tab-2">
          Radar
          <v-icon>mdi-radar</v-icon>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1">
          <Cont class="padding-wrapper" />
        </v-tab-item>
        <v-tab-item value="tab-2">
          <radar class="padding-wrapper" />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>
  
  <script>
import Radar from "@/components/Radar/Radar.vue";
import Cont from "@/components/Categorias/ListaCategorias.vue";

export default {
  components: {
    Radar,
    Cont,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
  
  <style>
.padding-wrapper {
  padding: 16px;
}
.full-width-container {
  width: 100%; 
  /* Make the container take the full width of the page */
 

}

.full-width-card {
  width: 100%; /* Make the card take the full width of the container */
 
  

}

.full-width-tabs {
  width: 100%; /* Make the tabs component take the full width of the card */
  

}
</style>