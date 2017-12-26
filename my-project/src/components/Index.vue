<template>
  <el-container class="index">
      <el-header class="head">
          <el-row>
            <el-col :span="12" class="cssf3172d28f1b6af logo">
              <i class="iconfont logo">&#xe616;</i>
            </el-col>
            <el-col :span="12">
              <nav class="head_nav">
                <a href="#" class="active">幸福经历</a>
                <a href="#">最美的你</a>
                <a href="#">表白时刻</a>
                <a href="#">甜蜜印象</a>
              </nav>
            </el-col>
          </el-row>
      </el-header>
      <el-main class="mid_cont">
        <h1>Feng &amp; Qin</h1>
        <p class="test">love you forever</p>
        <ul class="time">
          <li>
            <p>{{days}}</p>
            <p>Days</p>
          </li>
          <li>
            <p>{{hours}}</p>
            <p>Hours</p>
          </li>
          <li>
            <p>{{minutes}}</p>
            <p>Minutes</p>
          </li>
          <li>
            <p>{{seconds}}</p>
            <p>Seconds</p>
          </li>
        </ul>
      </el-main>
    </el-container>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
  },
  methods: {
    times: function () {
      var s1 = '2016-06-17'
      var s2 = new Date()
      s1 = new Date(s1.replace(/-/g, '/'))

      var _day = s2.getTime() - s1.getTime()
      this.days = parseInt(_day / (1000 * 60 * 60 * 24))
    }
  },
  mounted: function () {
    this.times()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    width: 100%;
    height: 100vh;
    background: url("../assets/index-back1.jpg") no-repeat center;
    background-size: cover;
  }

  .head{
    width: 70%;
    padding-top: 20px;
    line-height: 60px;
    margin: 0 auto;
    color: #fff;
    box-sizing: content-box;
  }

  .logo{
    font-size: 100px;
    font-style: italic;
    letter-spacing: -5px;
  }

  .head_nav{
    text-align: right;
  }

  .head_nav > a{
    color: #dbdbdd;
    position: relative;
    top: 9px;
    font-size: 15px;
    margin-left: 30px;
  }

  .head_nav > a:hover, .head_nav > a.active, .mid_cont{
    color: #fff;
  }

  .mid_cont{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 200px;
    color: #fff;
    opacity: 0.8;
    font-size: 40px;
  }

  .mid_cont > h1{
    font-family:'NaiYouf31f9c89c1b6af';
    font-size: 100px;
    letter-spacing: -5px;
    margin-bottom: 30px;
  }

  .mid_cont > .test{
    margin-bottom: 70px;
  }

  .time{
    display: flex;
    justify-content: center;
  }

  .time > li{
    width: 100px;
    height: 100px;
    border-radius: 60px;
    background: #ff88f5;
    margin-bottom: 50px;
    margin-left: 10px;
  }
</style>
