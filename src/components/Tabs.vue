<template>
    <div class="padding-wrapper">
    <v-card :padding="4">
      <v-tabs
        v-model="tab"
        background-color="deep-purple accent-4"
        centered
        dark
        icons-and-text
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
          <Cont />
        </v-tab-item>
        <v-tab-item value="tab-2">
          <radar />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
</div>
  </template>
  
  
  <script>
  import Radar from '@/components/Radar/Radar.vue'
  import Cont from '@/components/Categorias/List.vue'
 
  
  export default {
    components: {
      Radar,
      Cont,
    },
    data() {
      return {
        tab: null,
      }
    },
  }
  </script>
  
  <style>
.padding-wrapper {
  padding: 16px;
}
</style>