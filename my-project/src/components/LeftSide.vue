<template>
  <el-aside class="side-bar">
      <ul>
        <li><router-link to="Index">首页</router-link></li>
        <li><router-link to="Experience">幸福经历</router-link></li>
        <li><router-link to="Beautiful">最美的你</router-link></li>
        <li><router-link to="Sincerity">表白时刻</router-link></li>
      </ul>
    </el-aside>
</template>

<script>
export default {
  name: 'LeftSide'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bar{
    background: url("../assets/side-bar.jpg") no-repeat center;
    background-size: cover;
    box-shadow: 3px 0 6px #ccc;
    position: relative;
    width: 22%;
    height: 100%;
    overflow: hidden;
  }

  .side-bar > ul{
    width: 140px;
    height: 260px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -130px;
  }

  .side-bar > ul li{
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-bottom: 15px;
    text-align: right;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  .side-bar > ul a{
    display: block;
    padding-right: 10px;
    box-sizing: border-box;
    font-size: 15px;
    background: -webkit-linear-gradient(left,transparent,#8d8d8d 65%);
  }

  .side-bar > ul a:hover{
    background: -webkit-linear-gradient(left,transparent,#ff88f5 65%);
  }
</style>
