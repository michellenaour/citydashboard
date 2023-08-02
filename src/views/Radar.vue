<template>
  <div class="home">
    <v-container>
      <v-row dense >
        <v-col cols="2" >
          <v-btn @click="goToCategorias">
            Categoríass
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn @click="goToRadar">
            Radar
          </v-btn>
        </v-col>
        <v-col cols="9"></v-col>
      </v-row>
      <v-row>
        <v-col cols="10">
          <Radar />
        </v-col>
      </v-row>
    </v-container> 
  </div>
</template>

<script>

  export default {
    name: 'Home',
    components: {
      Radar: () => import("@/components/Radar/Radar"),
    
    },
    methods: {
      goToCategorias() {
        this.$router.push('/about');
      }
    }
  }
</script>