<template>
  <div>
    <h1>Mi Mapa</h1>
    <Mapa />
  </div>
</template>

<script>


export default {
  components: {
    Mapa: ()=> import("@/components/Mapa"),
  }
};
</script>
