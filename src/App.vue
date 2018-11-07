<template>
  <div id="app">
    <headerk></headerk>
    <!-- <h2>{{mss}}</h2>
    <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <!-- <router-link to='/'>默认界面</router-link>
    <router-link to='/ceshi'>路由a</router-link>
    <router-link to='/ceshia'>路由b</router-link> -->
    
    <router-view/>
  </div>
</template>

<script>
import headerk from './components/headerk'
export default {
  name: 'App',
  components:{
    headerk
  },
  data(){
    return {
      
    }
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
}
*{
  padding:0;
  margin:0;
}
</style>
