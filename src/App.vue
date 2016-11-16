<template>
  <div id="app">
    <side></side>
    <router-content />
  </div>

</template>
<script>
  import Side from './components/Side.vue'
  import RouterContent from './components/Content.vue'

  export default{
    components : { Side, RouterContent }
  }
</script>
<style>

</style>

