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
  * {
    margin: 0;
    padding: 0;
    font-family: "Microsoft YaHei",Arial, Helvetica, sans-serif;
    color: #333;
  }

  body{
    min-width: 980px;
  }

  ul,ol {
    list-style: none;
  }

  a,a:hover,a:active,a:visited {
    text-decoration: none;
    color: #333;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    border: none;
  }

  button,input,select,textarea {
    font-size: 100%;
  }
</style>
