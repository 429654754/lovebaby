<template>
  <div id="index">

    <!--侧边背景图-->
    <section class="back_left"></section>
    <section class="back_right"></section>

    <!--导航-->
    <nav>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #index {
    width: 100%;
    height: 100vh;
    background: url("../assets/index-back.jpg") no-repeat;
    background-size: cover;
    position: relative;
  }

  .back_left,.back_right{
    width: 17%;
    background: url("../assets/index-side1.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    opacity: 0.7;
  }

  .back_right{
    background-image: url("../assets/index-side2.png");
    left: auto;
    right: 0;
  }
</style>
