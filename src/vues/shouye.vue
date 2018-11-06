<template>
  <div class="hello">
    <header class="header">
    <div class="tou">
       <p>线下培训</p>
       <p>在线培训</p>
       <p>模拟面试</p>
    </div>
   </header>
   <div class="nav">
     <p>英语</p>
     <p>海事安全培训</p>
   </div>
   <div class="kong"></div>
   <div class="matter">
     <dl>
       <dt><img src="../../assets/images/pxindex1.jpg"></dt>
       <dd>
         <h1>3月20号 公主邮轮 上海现场面试<span>¥12</span></h1>
         <p>各级厨师 初级服务员 酒吧服务员 免税店 摄影店 摄影师 娱乐免税店 摄影师 娱乐....</p>
       </dd>
     </dl>
     <button class="btn">报名</button>
   </div>
   <div class="matter">
     <dl>
       <dt><img src="../../assets/images/pxindex1.jpg"></dt>
       <dd>
         <h1>3月20号 公主邮轮 上海现场面试<span>¥12</span></h1>
         <p>各级厨师 初级服务员 酒吧服务员 免税店 摄影店 摄影师 娱乐免税店 摄影师 娱乐....</p>
       </dd>
     </dl>
     <button class="btn">报名</button>
   </div>
   <div class="matter">
     <dl>
       <dt><img src="../../assets/images/pxindex1.jpg"></dt>
       <dd>
         <h1>3月20号 公主邮轮 上海现场面试<span>¥12</span></h1>
         <p>各级厨师 初级服务员 酒吧服务员 免税店 摄影店 摄影师 娱乐免税店 摄影师 娱乐....</p>
       </dd>
     </dl>
     <button class="btn">报名</button>
   </div>
   <div class="matter">
     <dl>
       <dt><img src="../../assets/images/pxindex1.jpg"></dt>
       <dd>
         <h1>3月20号 公主邮轮 上海现场面试<span>¥12</span></h1>
         <p>各级厨师 初级服务员 酒吧服务员 免税店 摄影店 摄影师 娱乐免税店 摄影师 娱乐....</p>
       </dd>
     </dl>
     <button class="btn">报名</button>
   </div>
   <div class="matter">
     <dl>
       <dt><img src="../../assets/images/pxindex1.jpg"></dt>
       <dd>
         <h1>3月20号 公主邮轮 上海现场面试<span>¥12</span></h1>
         <p>各级厨师 初级服务员 酒吧服务员 免税店 摄影店 摄影师 娱乐免税店 摄影师 娱乐....</p>
       </dd>
     </dl>
     <button class="btn">报名</button>
   </div>
   <footers></footers>
  </div>
</template>

<script>
import footers  from "../../components/footers"
export default {
  name: 'px',
  components:{footers}
}
</script>


<style scoped>
  .hello{
    width: 100%;
    height: 17.8rem;
  }
.header{
  width: 100%;
  height: 1.706667rem;
  background: #27c1b4; 
  display: flex;
  justify-content: center;
  align-items: center;
}
.tou{
  width: 6.8rem;
  height: .8rem;
  margin: 0 auto;
  display: flex;
  border: 1px solid white;
  border-radius:.133333rem;
}
.tou p{
  flex: 1; 
  display: block; 
  height: 100%;
  line-height: .8rem; 
  font-size: .4rem;
  text-align: center;
  color: white;
}
.tou p:first-child{
  background: white;
  border-top-left-radius: .133333rem;
  border-bottom-left-radius: .133333rem;
  color: #27c1b4;
}
.nav{
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav p{
  padding: 0 1.333333rem;

}
.kong{
  width: 100%;
  height: .266667rem;
  background: #f0f0f0;
}
.matter{
  width: 100%;
  height:2.666667rem;
  border-bottom: 1px solid #f0f0f0;
}
.matter dl{
  display: flex;
}
.matter dl dt img{
  width: 1.306667rem;
  height: 1.333333rem;
  padding-top: .533333rem;
  padding-left: .266667rem;
}
.matter dl dd{
  padding-left: .4rem;
  padding-top: .533333rem;

}
.matter dl dd h1{
  font-size: .333333rem;
}
.matter dl dd h1 span{
  margin-left: 1.733333rem;
  color: red;
  font-size: .4rem;
}
.matter dl dd p{
  margin-top: .266667rem;
  line-height: .4rem;
  color: #ccc;
  font-size: .333333rem;
}
.btn{
  color: orange;
  width: .933333rem;
  height: .4rem;
  border: none;
  outline: none;
  font-size:.293333rem;
  margin-left: 8.533333rem;
}
</style>
