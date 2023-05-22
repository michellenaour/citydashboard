<script>
export default {
  name: 'App',
  data () {
      return {
        items: [
          { title: 'Mesa', icon: 'mdi-table-furniture' },
          { title: 'Configuración', icon: 'mdi-cog' },
          { title: 'Fórmulas', icon: 'mdi-numeric' },
          { title: 'Métricas', icon: 'mdi-puzzle-edit' },
          { title: 'Indicadores', icon: 'mdi-list-box-outline' },
        ],
        table: 'Temuco Centro' ,// New property with the desired value
        right: null,
      }
    },
};

</script>

<template>
  <v-app >
    <v-tool-bar > 
      <h1>CityScope Dashboard</h1>
      <h3>Mesa: {{ table }}</h3>
    </v-tool-bar>
    
    <v-navigation-drawer app  expand-on-hover permanent clipped >
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-container><router-view/></v-container>
    
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
