<template>
  <div class="index">
    <el-container class="index_box">
      <el-header class="head">
        <el-row>
          <el-col :span="12" class="cssf3172d28f1b6af logo">
            <i class="iconfont logo">&#xe616;</i>
          </el-col>
          <el-col :span="12">
            <nav class="head_nav">
              <a href="#" class="active">首页</a>
              <router-link to="Experience">幸福经历</router-link>
              <router-link to="Beautiful">最美的你</router-link>
              <router-link to="Sincerity">表白时刻</router-link>
            </nav>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="mid_cont">
        <h1 class="animated fadeInDown title">Feng &amp; Qin</h1>
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
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
    }
  },
  methods: {
    times: function () {  //计算时间
      var s1 = '2016-06-17'
      var s2 = new Date()
      s1 = new Date(s1.replace(/-/g, '/'))

      var _day = s2.getTime() - s1.getTime()
      this.days = parseInt(_day / (1000 * 60 * 60 * 24))
      var _hours = parseInt(_day / (1000 * 60 * 60)) - parseInt(this.days * 24)
      this.hours = parseInt(_hours)
      var _minutes = parseInt(_day / (1000 * 60)) - parseInt((this.days * 24 * 60) + (this.hours * 60))
      this.minutes = parseInt(_minutes)
      var _seconds = parseInt(_day / 1000) - parseInt((this.days * 24 * 60 * 60) + (this.hours * 60 * 60) + (this.minutes * 60))
      this.seconds = parseInt(_seconds)

      this.timer()
    },
    timer: function () {  //计时器
      this.seconds += 1
      if (this.seconds >= 60) {
        this.seconds = 0
        this.minutes += 1
      } else if (this.minutes >= 60) {
        this.minutes = 0
        this.hours += 1
      } else if (this.hours >= 24) {
        this.hours = 0
        this.days += 1
      }
      setTimeout(this.times, 1000)
    },
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

  .index_box{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
  }

  .head{
    width: 70%;
    padding-top: 20px;
    line-height: 60px;
    margin: 0 auto;
    box-sizing: content-box;
  }

  .logo{
    font-size: 100px;
    font-style: italic;
    letter-spacing: -5px;
    color: #fff;
  }

  .head_nav{
    text-align: right;
  }

  .head_nav > a{
    color: #dbdbdd;
    position: relative;
    top: 9px;
    font-size: 16px;
    margin-left: 30px;
    font-weight: bold;
  }

  .head_nav > a:hover, .head_nav > a.active, .mid_cont{
    color: #fff;
  }

  .mid_cont{
    width: 100%;
    font-size: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .mid_cont > h1{
    font-family:'NaiYouf31f9c89c1b6af';
    font-size: 120px;
    letter-spacing: -5px;
    opacity: 0.8;
  }

  .test{
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .time{
    display: flex;
    justify-content: center;
    opacity: 0.8;
  }

  .time > li{
    width: 100px;
    height: 100px;
    padding-top: 30px;
    box-sizing: border-box;
    border-radius: 60px;
    background: #ff88f5;
    margin-bottom: 50px;
    margin-left: 10px;
    text-align: center;
    font-size: 30px;
    animation: pulse 1s ease infinite;
  }

  .time > li p:nth-child(2){
    font-size: 14px;
    margin-top: 10px;
  }

  .back, .back_index{
    width: 100%;
    height: 100vh;
    background: #000;
    opacity: 0.7;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
  }

  .back_index{
    z-index: 2;
    opacity: 0.3;
  }

  .box{
    width: 400px;
    height: 220px;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 5;
    margin-top: -200px;
    margin-left: -200px;
    background: #ff195a;
    border-radius: 15px;
    padding: 15px 35px 15px 35px;
    box-sizing: border-box;
    text-align: center;
  }

  .box > p{
    font-size: 20px;
    margin-bottom: 15px;
    color: #fff;
  }

  .box > .zh, .box > .mm{
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
    width: 100%;
    height: 38px;
    margin-bottom: 15px;
    padding: 0 5px;
    box-sizing: border-box;
    color: #ff88f5;
  }

  .yz{
    width: 40%;
    height: 36px;
    background: #ff88f5;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
  }

  .btn{
    width: 140px;
    height: 40px;
    background: #fff;
    color: #ff88f5;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 20px;
  }
</style>
