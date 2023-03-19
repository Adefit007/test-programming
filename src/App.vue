<template>
  <NavBar/>
  <div class="container-fluid">
  <!-- <HelloWorld/> -->
  <div class="container">
        <div class="row">
            <div class="col-m-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue' 
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
