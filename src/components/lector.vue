
<template>
  <div>
    <h1>Hola</h1>
    <pre>{{ users }}</pre>
    </div>
  <!-- Your component template -->
</template>

<script>
import apiService from '../services/api.service.js';

export default {
  data() {
    return {
      users: [],
     
    };
  },
  mounted() {
    this.fetchUsers();
   
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await apiService.getUsers();
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    
  },
};
</script>

<style>
/* Your component styles */
</style>
