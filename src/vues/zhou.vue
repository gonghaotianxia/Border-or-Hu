<template>
  <div class="hello">
        <div class="swiper-container" v-on:mouseover="showright=true" v-on:mouseout="showright=false"> 
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/img/carDeepGrayOrange.png" alt="高级轿车"></div>
            <div class="swiper-slide"><img src="../assets/img/carRed.png" alt="高级轿车"></div>
            <div class="swiper-slide"> <img src="../assets/img/carYellow.png" alt="高级轿车"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div class="ding">
          <i class="fa fa-chevron-left" aria-hidden="true"></i><span>途中晒</span>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <div class="right" v-if="showright">
            <p><i class="fa fa-camera-retro" aria-hidden="true"></i><span>拍视频</span></p>
            <p><i class="fa fa-file-text-o" aria-hidden="true"></i><span>随心发</span></p>
            <p><i class="fa fa-search" aria-hidden="true"></i><span>搜一搜</span></p>
        </div>
  </div>
  <div class="til">
    <p class="tils">小图片</p>
    <p class="tils">随心发</p>
  </div>
  <div class="foott">
      <dl>
        <dt><img src="../assets/img/tiananmenss.jpg" alt="天安门"></dt>
        <dd>天安门</dd>
      </dl>
      <dl>
        <dt><img src="../assets/img/tiananmenimgsss.jpg" alt="天安门"></dt>
        <dd>天安门广场外国小美女</dd>
      </dl>
      <dl>
        <dt><img src="../assets/img/tiananmenimgs.jpg" alt="天安门"></dt>
        <dd>天安门外国小美女照相</dd>
      </dl>
      <dl>
        <dt><img src="../assets/img/tiananmenimgd.jpg" alt="天安门"></dt>
        <dd>天安门广场前竟然出现这么一个煞风景的人，虽然我只看到了你的大后脑勺，依然挡不住我对你发自内心的无声的蔑视.</dd>
      </dl>
  </div>
  
    <h2>你来了，就做这里歇会儿吧</h2>
    <!-- 更多 -->
    <!-- <i class="fa fa-caret-down" aria-hidden="true"></i> -->
    <!-- 搜索符号 -->
    <!-- <i class="fa fa-search" aria-hidden="true"></i> -->
    <!-- 大于号 -->
    <!-- <i class="fa fa-chevron-left" aria-hidden="true"></i> -->
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
      msg: '欢迎来到共好天下',
      showright:false,
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
    .px2rem(@name, @px){
        @{name}: @px / 75 * 1rem;
    }
    .swiper-slide img{
      width: 100%;
    }
    .right{
     .px2rem(height, 160);
      z-index: 100;
      width: 35%;
      display: flex;
      position: absolute;
      .px2rem(top,60);
      right: 0;
      flex-direction: column;
      background: rgba(13, 49, 13, 0.5);
      // align-items: center;
      .px2rem(padding-left,10);
      p{
        height: 33%;
        color: #fff;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        cursor: pointer;
        .px2rem(font-size,20);
        // border-bottom: .125rem /* 2/16 */ solid #fff;
      }
    }
    .ding{
      .px2rem(height,30);
      
      align-items: center;
      background: rgba(127, 209, 127,0.3);
      display: flex;
      justify-content: space-around;
      .px2rem(font-size,20);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 65;
    }
    .ding:first-child,.ding:last-child{
      font-size: 2.25rem /* 36/16 */;
    }
    .til{
      .px2rem(font-size,30);
      display: flex;
      align-items: center;
      justify-content: space-around;
      .px2rem(font-size,20);
      background: #ccc;
      p:hover{
        color: blueviolet;
      }
    }
    .foott{
      // margin-top: .625rem /* 10/16 */;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .px2rem(margin,5);
      dl{
        width: 45%;
        display: flex;
        flex-direction: column;
        background: #ccc;
        img{
          width: 100%;
        }
        dd{
          .px2rem(font-size,28);
          
        }
      }
    }

</style>
