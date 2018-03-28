<template>
    <div class="hai">
        {{message}}
    </div>
 </template>
 <script>
   import $ from 'jquery'
    export default {
        data() {
            return{
                message:'hai,您好,使用 vue 架构前端框架'
            }
        },
        //引用组件名
        components:{},
        //生命周期--组件挂载之前
        created(){},
        //生命周期--组件挂载之后
        mounted(){
          console.log($)
        },
        //生命周期--组件被销毁之前
        beforeDestroy(){},
        //生命周期==组件销毁时
        destroyed(){},
        //组件方法集合
        methods:{},
        //监听事件
        watch:{},
        //计算属性
        computed:{}
    }
 </script>
 <style lang="scss" scoped>
    .hai{}
 </style>
