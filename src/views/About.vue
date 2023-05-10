<template>
  <div class="home">
    <List />
  </div>
</template>

<script>



export default {
  name: 'Home',
  components: {
    List: () => import("@/components/Categorias/List"),
    
  },
  methods: {
   
  }
}
</script>

