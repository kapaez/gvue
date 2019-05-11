<template>
  <div id="app">
    <div id="nav">
      <gvueinput></gvueinput>
    </div>
    <router-view/>
  </div>
</template>

<script>
import gvueinput from './components/input'
export default {
  name: 'app',
  components: {
    gvueinput,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
