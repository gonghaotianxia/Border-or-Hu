<template>
  <header>
    <ul>
      <li>《</li>
      <li>出行秘书</li>
      <li>更多</li>
    </ul>
    <!-- <router-link to='/' class="rout"> 《 </router-link>
    <router-link to='/ceshi' class="rout">出行秘书</router-link>
    <router-link to='/ceshia' class="rout" >更多</router-link> -->
    <div class="zhiyin">
      <dl>
        <dt>
          <img src="../assets/gzzy.png">
        </dt>
        <dd>
          <router-link to='/' class="rout">各种指引</router-link>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../assets/xcgl.png">
        </dt>
        <dd>
          <p>行程管理</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../assets/jcdh.png">
        </dt>
        <dd>
          <p>机场导航</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../assets/dccz.png">
        </dt>
        <dd>
          <p>打车出租</p>
        </dd>
      </dl>
    </div>
  </header> 
</template>

<script>
export default {
  
};
</script>

<style scoped lang="less">
header {
  position: relative;
  top: 0;
  height: 9.53rem;
  background: #617897;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding-top: 0.625rem /* 10/16 */;
    li {
      color: #fff;
    }
  }
  // .rout{
  //   text-decoration: none;
  //   // color:#fff;
  //   padding-top:.625rem /* 10/16 */;
  // }
  .zhiyin {
    width: 80%;
    background:#fff;
    height: 6.25rem /* 260/16 */;
    left:10%;
    border-radius: 0.625rem; /* 10/16 */
    position: relative;
    top:2.25rem /* 20/16 */;
    display: flex;
    flex-direction: row;
    align-items: center;
    dl{
      flex: 1;
      dt{
        img{
          width:3.25rem /* 100/16 */;
          height:3.25rem;
        }
      }
      dd{
        font-size:.75rem /* 12/16 */;
        letter-spacing:.0625rem /* 1/16 */
      }
    }
  }
}
</style>

