<template>
    <div id="zheng">
        <div class="header">
            <i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i><span>旅游圈</span>
            <i class="fa fa-cog fa-spin fa-2x fa-fw"></i>
        </div>
        <main>
            <div class="item">
                <p class="icons">
                    <img src="../assets/img/P80519-141800.jpg" alt="小美女">
                </p>
                <div class="message">
                    <h3>你不知道我的名字</h3>
                    <p>我来了</p>
                    <div class="picname">
                        <h4></h4>
                        <img src="../assets/img/carDeepGrayOrange.png" alt="">
                    </div>
                </div>
            </div>
            <div class="item">
                <p class="icons">
                    <img src="../assets/img/tiananmenss.jpg" alt="小美女">
                </p>
                <div class="message">
                    <h3>2个小美女</h3>
                    <p></p>
                    <div class="picname">
                        <h4>我们在北京天安门</h4>
                        <img src="../assets/img/tiananmenss.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="item">
                <p class="icons">
                    <img src="../assets/img/lunzi.png" alt="小美女">
                </p>
                <div class="message">
                    <h3>轮子</h3>
                    <p>我会滚，你会吗？</p>
                    <div class="picname">
                        <h4>敢挡路我压死你</h4>
                        <img src="../assets/img/lunzi.png" alt="">
                    </div>
                </div>
            </div>
            <div class="item">
                <p class="icons">
                    <img src="../assets/img/P80519-154813(1).jpg" alt="大傻子">
                </p>
                <div class="message">
                    <h3>小鸡小鸡</h3>
                    <p>还有谁？能把我咋的！就这么有尿性</p>
                    <div class="picname">
                        <h4>我的眼里没有你，小样</h4>
                        <img src="../assets/img/carRed.png" alt="">
                    </div>
                </div>
            </div>
        </main>
        <router-view/>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "zheng",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.px2rem(@name, @px) {
  @{name}: @px / 75 * 1rem;
}
main{
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
    .px2rem(font-size,30);
    .item{
        width: 100%;
        border-bottom: 1px solid #666;
        display: flex;
        justify-content: space-around;
        .px2rem(margin,20);
        // justify-content: flex-start;
        .icons{
            width:20%;
            border-radius: 50%;
            img{
                width: 100%;
                border-radius:50%;
            }
        }
        .message{
            width: 75%;
            display: flex;
            flex-direction: column;
            // justify-content: flex-start;
            h3{
                width: 100%;
                .px2rem(height, 80);
                .px2rem(line-height, 80);
                color: rgb(88, 223, 88);
                text-align: left;
            }
            p{
                width: 100%;
                .px2rem(height, 60);
                .px2rem(line-height, 60);
                text-align: left;
            }
            .picname{
                width: 100%;
                display: flex;
                flex-direction: column;
                .px2rem(margin-bottom,20);
                h4{
                    width: 100%;
                   .px2rem(height, 80);
                   .px2rem(line-height, 80);
                   font-weight: bolder;
                   color: #000;
                }
                img{
                    display: block;
                    width: 100%;
                }
            }

        }
    }
}

        
.header {
    .px2rem(height,80);
    display: flex;
    align-items: center;
    background: rgba(38, 38, 231, 0.9);
    width: 100%;
    justify-content: space-around;
    font-weight: bolder;
    .px2rem(font-size, 30);
    color: #ffffff;
    i,span{
        cursor: pointer;
    }
}
#zheng {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>