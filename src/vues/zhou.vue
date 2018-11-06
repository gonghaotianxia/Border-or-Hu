<template>
  <div class="hello">
        <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/img/carDeepGrayOrange.png" alt="高级轿车"></div>
            <div class="swiper-slide"><img src="../assets/img/carRed.png" alt="高级轿车"></div>
            <div class="swiper-slide"> <img src="../assets/img/carYellow.png" alt="高级轿车"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
  </div>
  <div class="til">
    <p class="tils">短视频</p>
    <p class="tils">随心发</p>
  </div>
  <!-- <div class="mue">
    <div class="eve">
      <video-player class="video-player vjs-custom-skin" 
      ref="videoPlayer" :playsinline="true" :options="playerOptions" ></video-player>
    </div>
    
  </div> -->
    <h2>你来了，就做这里歇会儿吧</h2>
    <!-- 更多 -->
    <i class="fa fa-caret-down" aria-hidden="true"></i>
    <!-- 搜索符号 -->
    <i class="fa fa-search" aria-hidden="true"></i>
    <!-- 大于号 -->
    <i class="fa fa-chevron-left" aria-hidden="true"></i>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          我不是菜鸟，但是我很菜Q!
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'zhou',
  data () {
    return {
      msg: '欢迎来到共好天下'
    }
  },
  mounted:function() {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay:true,
      pagination: {
        el: '.swiper-pagination',
      }
    })
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .swiper-slide img{
      width: 100%;
    }
    .til{
      height: 2.5rem /* 40/16 */;
      display: flex;
      justify-content: space-around;
      p:hover{
        color: blueviolet;
      }
    }
    

</style>
