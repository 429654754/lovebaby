<template>
  <el-container class="experience">
    <LeftSide></LeftSide>
    <el-main class="ex-cont">
      <div class="ex-item ex-nt">
        <h1>南塘老街</h1>
        <p class="title">November 7th 2016</p>
        <el-carousel :interval="100000" type="card">
          <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
        </el-carousel>
        <p class="cont">晚上带北鼻第一次来南塘老街逛逛，看看夜景，虽然没吃什么东西，但是逛还是很开心。</p>
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
  }

  .ex-nt > h1{
    color: #ff88f5;
  }

  .el-carousel{
    width: 60%;
    height: 280px;
    margin: 0 auto;
    overflow: hidden;
  }

  .el-carousel__container .el-carousel__item{
    opacity: 1;
    margin: 0;
  }

  .el-carousel__item:nth-child(1n) {
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
</style>
