<template>
  <div id="app" class='container'>
      <nav-bar></nav-bar>
      <router-view></router-view>
  </div>
</template>

<script>

import navBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
      navBar
  },
  data () {
    return {}
  }
}
</script>
