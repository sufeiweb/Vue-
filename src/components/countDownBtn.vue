<template>
    <button :disabled='countDownState' @click="getCodes" class="countDownBtn">{{countDownTxt}}</button>
 </template>
 <script>
   import {mapGetters} from 'vuex';
    export default {
        data() {
            return{
                message:''
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
        methods:{
          getCodes(){
            console.log(111111)
              this.getCode(60000)
          }
        },
        //监听事件
        watch:{},
        //计算属性
        computed:{
          ...mapGetters(['countDownState','countDownTxt'])
        }
    }
 </script>
 <style lang="scss" scoped>
    .boxMain{}
 </style>
