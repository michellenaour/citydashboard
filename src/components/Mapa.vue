<template>
  <div>
    <l-map style="height: 400px; width: 100%;" :zoom="13" :center="[51.505, -0.09]" :options="mapOptions">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>



import { LMap, LTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  components: {
    LMap,
    LTileLayer,
  },
  
  data() {
    return {
      mapOptions: {
        dragging: false, // Desactivar arrastrar el mapa
        zoomControl: false, // Desactivar control de zoom
      },
    };
  },
}
</script>
