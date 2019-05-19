<template>
  <div class="container">
    swiper
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" ref="swiperPagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev" ref="swiperBtnPrev"></div>
      <div class="swiper-button-next" ref="swiperBtnNext"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      // eslint-disable-next-line no-unused-vars
      var mySwiper = new Swiper(this.$refs.swiperContainer, {
        // autoplay: true,
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // // 如果需要分页器
        pagination: {
          el: this.$refs.swiperPagination
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: this.$refs.swiperBtnNext,
          prevEl: this.$refs.swiperBtnPrev
        },
        autoplay: {
          disableOnInteraction: false
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.swiper-container
  width: 600px;
  height: 300px;
  .swiper-wrapper
    height 100%
    .swiper-slide
      height 100%
      background-color #ccc
      text-align center
</style>
