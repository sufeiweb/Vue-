<template>
  <div id="app">
    <router-view/>
    <ErrorTips/>
  </div>
</template>

<script>
  import ErrorTips from './components/errorTips.vue';
export default {
  name: 'App',
  components:{
    ErrorTips
  },
  
  mounted(){
    console.log(this.MD5('123456'))
  },
  computed:{}
}
</script>

