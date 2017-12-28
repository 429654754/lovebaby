<template>
  <el-container class="beautiful">
    <LeftSide></LeftSide>
    <el-main class="ex-cont">
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
    </el-main>
  </el-container>
</template>

<script>
import LeftSide from './LeftSide'

export default {
  name: 'Beautiful',
  components: {LeftSide}
}

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

</style>
