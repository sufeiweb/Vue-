<template>
  <ul class="r-swiper-out" ref="swiperOut">
    <swiperOutItem/>
  </ul>
</template>

<script>
  import swiperOutItem from './swiperOutItem.vue';

  export default {
    data() {
      return {
        activeItem: null
      }
    },
    components: {
      swiperOutItem
    },
    methods: {
      changeActiveItem(item) {
        if (this.activeItem === item) return
        if (this.activeItem && this.activeItem.close) {
          this.activeItem.close()
        }
        this.activeItem = item
      },
      childRemove(childNode) {
        this.ErrorMessage('删除成功', 5000);
        this.$refs.swiperOut.removeChild(childNode)
      }
    },
    created() {
      this.$on('changeActiveItem', this.changeActiveItem)
      this.$on('childRemove', this.childRemove)
    }
  }
</script>

<style lang="scss">
  .r-swiper-out {
    font-size: 48px;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
</style>
