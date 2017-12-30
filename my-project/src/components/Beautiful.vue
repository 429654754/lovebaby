<template>
  <el-container class="beautiful">
    <LeftSide></LeftSide>
    <el-main class="ex-cont">
        <h1 class="cssf46aab01c1b6af">宝宝美照墙</h1>
        <img src="../assets/beaut1.jpg" alt="" class="beaut1" >
        <img src="../assets/beaut2.jpg" alt="" class="beaut2" >
        <img src="../assets/beaut3.jpg" alt="" class="beaut3" >
        <img src="../assets/beaut4.jpg" alt="" class="beaut4" >
        <img src="../assets/beaut5.jpg" alt="" class="beaut5" >
        <img src="../assets/beaut6.jpg" alt="" class="beaut6" >
        <img src="../assets/beaut7.jpg" alt="" class="beaut7" >
        <img src="../assets/beaut8.jpg" alt="" class="beaut8" >
        <img src="../assets/beaut9.jpg" alt="" class="beaut9" >
        <img src="../assets/beaut10.jpg" alt="" class="beaut10" >
        <img src="../assets/beaut11.jpg" alt="" class="beaut11" >
        <img src="../assets/beaut12.jpg" alt="" class="beaut12" >
        <img src="../assets/beaut13.jpg" alt="" class="beaut13" >
        <img src="../assets/beaut14.jpg" alt="" class="beaut14" >
        <img src="../assets/beaut15.jpg" alt="" class="beaut15" >
        <div class="zm-sj">
          <p>千秋无绝色！</p>
          <p>悦目是佳人！</p>
        </div>
        <div class="zm-sj2">
          <p>倾国倾城貌！</p>
          <p>惊为天下人！</p>
        </div>
    </el-main>
    <div class="back"></div>
    <img src="" alt="" class="big-img" >
  </el-container>
</template>

<script>
import LeftSide from './LeftSide'

export default {
  name: 'Beautiful',
  components: {LeftSide}
}

$(function(){
  $(".beautiful > .ex-cont").find("img").on("click",function(){
    $(".back").show();
    $(".big-img").fadeIn(300);
    var srcValue = $(this).attr("src");
    $(".big-img").attr("src", srcValue);
  })

  $(".back").on("click",function(){
    $(".big-img").fadeOut(300,function(){
      $(".back").hide();
    });
  })
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .beautiful{
        width: 100%;
        height: 100vh;
    }

    .side-bar >>> ul li:nth-child(3) a{
        background: -webkit-linear-gradient(left,transparent,#ff88f5 65%);
    }

    .ex-cont{
      padding: 0;
      position: relative;
      height: 100vh;
      overflow: scroll;
    }

    .ex-cont > h1{
      color: #ff88f5;
      text-align: center;
      font-size: 50px;
      margin-top: 10px;
    }

    .ex-cont > img{
      width: auto;
      height: 30%;
      position: absolute;
      cursor: pointer;
      border: 3px solid #ccc;
    }

    .ex-cont > img:hover{
      border: 3px solid #ff88f5;
    }

    .beaut1{
      left: 8%;
      top: 16%;
      transform:rotate(7deg);
    }

    .beaut2{
      left: 26%;
      top: 16%;
      transform:rotate(-10deg);
    }

    .beaut3{
      left: 44%;
      top: 16%;
      transform:rotate(2deg);
    }

    .beaut4{
      left: 62%;
      top: 16%;
      transform:rotate(-6deg);
    }

    .beaut5 {
      left: 80%;
      top: 16%;
      transform: rotate(7deg);
    }

    .beaut6 {
      left: 8%;
      top: 52%;
      transform: rotate(-5deg);
    }

    .beaut7 {
      left: 26%;
      top: 52%;
      transform: rotate(2deg);
    }

    .beaut8 {
      left: 44%;
      top: 52%;
      transform: rotate(8deg);
    }

    .beaut9 {
      left: 62%;
      top: 52%;
      transform: rotate(-3deg);
    }

    .beaut10 {
      left: 80%;
      top: 52%;
      transform: rotate(10deg);
    }

    .beaut11 {
      left: 8%;
      top: 88%;
      transform: rotate(-2deg);
    }

    .beaut12 {
      left: 26%;
      top: 88%;
      transform: rotate(7deg);
    }

    .beaut13 {
      left: 44%;
      top: 88%;
      transform: rotate(2deg);
    }

    .beaut14 {
      left: 62%;
      top: 88%;
      transform: rotate(-10deg);
    }

    .beaut15 {
      left: 80%;
      top: 88%;
      transform: rotate(5deg);
    }

    .zm-sj, .zm-sj2{
      position: absolute;
      top: 128%;
      width: 810px;
      margin-left: 10%;
      font-size: 30px;
      color: #ff88f5;
      font-weight: bold;
    }

    .zm-sj2{
      top: 137%;
    }

    .zm-sj > p, .zm-sj2 > p{
      float: left;
      font-style: italic;
      letter-spacing: 25px;
    }

    .zm-sj > p:first-child, .zm-sj2 > p:first-child{
      margin-right: 80px;
    }

    .back{
      width: 100%;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 10;
      background: #000;
      opacity: 0.85;
      display: none;
    }

    .big-img{
      width: auto;
      height: 500px;
      position: fixed;
      right: 32%;
      top: 40px;
      margin-left: -150px;
      z-index: 15;
      border: 3px solid #ccc;
      display: none;
    }
</style>
