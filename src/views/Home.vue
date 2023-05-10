<template>
  <div class="home">
    <v-row>
      <v-col cols="1"></v-col>
      <v-col :padding="4"><Tabs /></v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
</template>


<script>

  export default {
    name: 'Home',
    components: {
      Tabs: () => import("@/components/Tabs"),
    
    },
   
  }
</script>