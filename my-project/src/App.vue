<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

/*初始化*/
  *{ margin:0; padding:0;}
  body{ font-size:14px; font-family:"Microsoft Yahei";font-style:normal;min-width: 1200px;}
  a{ text-decoration:none}
  a,a:hover{  color:#fff;transition:background 0.5s linear;-webkit-transition:background 0.5s linear;-moz-transition:background 0.5s linear;-o-transition:background 0.5s linear;}
  em, i{font-style: normal;}
  ul, ol, li{list-style: none;}
  img{ border:none;vertical-align:middle;}
  input,select,textarea{outline:none;border:none;background:none;}
  textarea{resize:none;}
  p{line-height:22px;}
  .fl{float: left;}
  .fr{float: right;}
  .clear{ clear:both; height:0px; width:100%; overflow:hidden;}
  .position{position:relative;}

  @font-face {
    font-family: "iconfont";
    src: url("../static/iconfont.eot");
    src: url("../static/iconfont.eot?#iefix") format("embedded-opentype"),
      url("../static/iconfont.woff") format("woff"), url("../static/iconfont.ttf") format("truetype"),
      url("../static/iconfont.svg#iconfont") format("svg");
  }


  .iconfont {
    font-family: "iconfont" !important;
    font-size: inherit;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .ex-cont, .el-carousel__container{
    height: 100%;
    box-sizing: border-box;
  }
</style>
