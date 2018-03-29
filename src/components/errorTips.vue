<template>
  <transition enterActiveClass="animated fadeInDown" leaveActiveClass="animated fadeOutUp">
    <div class="errorTip" v-show="errorState">
      {{errorMessage}}
    </div>
  </transition>
 </template>
 <script>
   import {mapGetters} from 'vuex';
    export default {
        data() {
            return{
                message:'哎呀我错了'
            }
        },
        //引用组件名
        components:{},
        //生命周期--组件挂载之前
        created(){},
        //生命周期--组件挂载之后
        mounted(){},
        //生命周期--组件被销毁之前
        beforeDestroy(){},
        //生命周期==组件销毁时
        destroyed(){},
        //组件方法集合
        methods:{},
        //监听事件
        watch:{},
        //计算属性
        computed:{
          ...mapGetters(['errorState','errorMessage'])
        }
    }
 </script>
 <style lang="scss" scoped>
    .errorTip{
      font-family: PingFangSC-Regular;
      position: fixed;
      font-size: 24px;
      background: rgba(0,0,0,.5);
      color: #fff;
      padding: 8px 20px;
      box-sizing: border-box;
      border-radius: 6px;
      max-width: 80%;
      left: 50%;
      transform: translateX(-50%);
      bottom: 50%;
    }
 </style>
