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
  computed:{}
}
</script>

