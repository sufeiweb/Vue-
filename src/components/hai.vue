<template>
  <div class="hai">
    {{message}}
    <div class="box" id="tap">tap</div>
    <div class="box" id="longtap">longtap</div>
    <div class="box" id="doubletap">doubletap</div>
    <div class="box" id="press">press</div>
    <div class="box" id="swipe">swipe</div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import touch from '../assets/js/moveTouch'

  export default {
    data() {
      return {
        message: 'hai,您好,使用 vue 架构前端框架'
      }
    },
    //引用组件名
    components: {},
    //生命周期--组件挂载之前
    created() {
    },
    //生命周期--组件挂载之后
    mounted() {
      document.title = 'Vue架构';
      touch.tap(document.getElementById('tap'),()=>{
        console.log('touchstart')
      })
      touch.doubletap(document.getElementById('doubletap'),()=>{
        console.log('doubletap')
      })
      touch.longtap(document.getElementById('longtap'),()=>{
        console.info('longtap')
      },{
        time:500
      })
      touch.press(document.getElementById('press'),()=>{
        console.log('press')
      })
      touch.swipe(document.getElementById('swipe'),(e)=>{
        console.log(e)
      })
    },
    //生命周期--组件被销毁之前
    beforeDestroy() {
    },
    //生命周期==组件销毁时
    destroyed() {
    },
    //组件方法集合
    methods: {},
    //监听事件
    watch: {},
    //计算属性
    computed: {}
  }
</script>
<style lang="scss" scoped>
  .hai {
    .box {
      width: 400px;
      height: 80px;
      border: 1px solid #333;
      font-size: 48px;
      margin-bottom: 50px;
      text-align: center;
    }
  }
</style>
