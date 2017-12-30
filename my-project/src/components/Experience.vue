<template>
  <el-container class="experience">
    <LeftSide></LeftSide>
    <el-main class="ex-cont">
      <div class="ex-item ex-nt">
        <h1 class="cssf4d16294d1b6af">南塘老街</h1>
        <p class="title">November 7th 2016</p>
        <el-carousel :interval="100000" type="card">
          <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
        </el-carousel>
        <p class="cont">晚上带北鼻第一次来南塘老街逛逛，看看夜景，虽然没吃什么东西，但是逛还是很开心。</p>
      </div>

      <div class="ex-item ex-xh">
        <h1 class="cssf4d1715f01b6af">西湖夜游</h1>
        <p class="title">November 12th 2016</p>
        <el-carousel :interval="100000" type="card">
          <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
        </el-carousel>
        <p class="cont">晚上带北鼻夜游西湖，人很多很挤，灯光很美很浪漫，散步了1个多小时，手牵手聊着笑着。</p>
      </div>

      <div class="ex-item ex-yz">
        <h1 class="cssf4d17cb551b6af">鄞州公园</h1>
        <p class="title">December 3rd 2016</p>
        <el-carousel :interval="100000" type="card">
          <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
        </el-carousel>
        <p class="cont">第一次陪宝宝来鄞州公园，我也是第一次来这个公园，很热闹很大，玩的很开心。</p>
      </div>

      <div class="ex-item ex-xt">
        <h1 class="cssf4d1875701b6af">西塘古镇</h1>
        <p class="title">June 3rd 2017</p>
        <el-carousel :interval="100000" type="card">
          <el-carousel-item v-for="item in 6" :key="item"></el-carousel-item>
        </el-carousel>
        <p class="cont">嘉兴西塘，古色古香又不失现代化娱乐，我们坐了乌篷船，进了鬼屋，买了同心锁，亲自刻上了两个人的名字，当然也吃遍了小吃，宝宝开心的笑。</p>
      </div>

      <div class="ex-item ex-ac">
        <h1 class="cssf4d19273c1b6af">安昌古镇</h1>
        <p class="title">June 3rd 2017</p>
        <el-carousel :interval="100000" type="card">
          <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
        </el-carousel>
        <p class="cont">绍兴安昌，虽然没有西塘这么热闹，不过胜在安静，适合慢慢走慢慢享受，享受这难得的休息时光，享受这难得在一起出去玩的机会，享受宝宝在身边的感觉。</p>
      </div>

      <div class="ex-item ex-wl">
        <h1 class="cssf4d19bd131b6af">吃喝玩乐</h1>
        <p class="title">Fall in Love</p>
        <el-carousel :interval="100000" type="card">
          <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
        </el-carousel>
        <p class="cont">恋爱至今，我还去玩过很多地方，当然也一起吃过很多美食，吃吃喝喝，新年吃起来，小蛮腰就是从水桶腰减下来的。哈哈哈^_^</p>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import LeftSide from './LeftSide'

export default {
  name: 'Experience',
  components: {LeftSide}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .experience{
    width: 100%;
    height: 100vh;
  }

  .ex-cont{
    padding: 0px;
    text-align: center;
  }

  .ex-item > h1{
    color: #ff88f5;
    font-size: 50px;
  }

  .ex-item:nth-child(2n){
    background-color:#f1f1f1;
  }

  .el-carousel{
    width: 70%;
    height: 280px;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: 30px;
  }

  .el-carousel__container .el-carousel__item{
    opacity: 1;
    margin: 0;
  }

  .ex-nt .el-carousel__item:nth-child(1n) {
    background: url("../assets/nt1.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-nt .el-carousel__item:nth-child(2n) {
    background: url("../assets/nt2.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-nt .el-carousel__item:nth-child(3n) {
    background: url("../assets/nt3.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-item{
    padding-top: 30px;
    color: #333;
    padding-bottom: 30px;
  }

  .title{
    margin: 20px 0;
    font-size: 30px;
    color: #ccc;
  }

  .cont{
    width: 66%;
    margin: 0 auto;
  }

  .ex-xh .el-carousel__item:nth-child(1n) {
    background: url("../assets/xh1.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-xh .el-carousel__item:nth-child(2n) {
    background: url("../assets/xh2.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-xh .el-carousel__item:nth-child(3n) {
    background: url("../assets/xh3.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-yz .el-carousel__item:nth-child(1n) {
    background: url("../assets/yz1.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-yz .el-carousel__item:nth-child(2n) {
    background: url("../assets/yz2.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-yz .el-carousel__item:nth-child(3n) {
    background: url("../assets/yz3.jpg") no-repeat center;
    background-size: auto 100%;
  }


  .ex-xt .el-carousel__item:nth-child(1n) {
    background: url("../assets/xt1.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-xt .el-carousel__item:nth-child(2n) {
    background: url("../assets/xt2.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-xt .el-carousel__item:nth-child(3n) {
    background: url("../assets/xt3.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-xt .el-carousel__item:nth-child(4n) {
    background: url("../assets/xt4.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-xt .el-carousel__item:nth-child(5n) {
    background: url("../assets/xt5.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-xt .el-carousel__item:nth-child(6n) {
    background: url("../assets/xt6.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-ac .el-carousel__item:nth-child(1n) {
    background: url("../assets/ac1.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-ac .el-carousel__item:nth-child(2n) {
    background: url("../assets/ac2.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-ac .el-carousel__item:nth-child(3n) {
    background: url("../assets/ac3.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-wl .el-carousel__item:nth-child(1n) {
    background: url("../assets/wl1.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-wl .el-carousel__item:nth-child(2n) {
    background: url("../assets/wl2.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .ex-wl .el-carousel__item:nth-child(3n) {
    background: url("../assets/wl3.jpg") no-repeat center;
    background-size: auto 100%;
  }

  .side-bar >>> ul li:nth-child(2) a{
    background: -webkit-linear-gradient(left,transparent,#ff88f5 65%);
  }

</style>
