<template>
  <div class="container">
    <div class="row text-center" style="height: 300px;">
      <div class="col col align-self-center">
        <img src="../../asset/image/aid-logo.png">
      </div>
    </div>
    <div class="row align-items-center text-center">
      <div class="col">
        <h2>Hello Taurus Project!</h2>
      </div>
    </div>
    <div class="row align-items-center text-center mt-5">
      <div class="col">
        <ul class="list-inline">
          <li class="list-inline-item mr-3" v-for="v in routes" v-if="v.name!=='' && v.name!=='Index'">
            <router-link :to="{path:v.path}">{{v.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import routes from '../../routes'
  export default {
    data(){
      return {
        routes,
      }
    }
  }
</script>
<style>
    body{
        background: #FFF;
    }
</style>
