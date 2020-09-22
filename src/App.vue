<template>
  <div id="app">
    <!-- <h1>自己的项目</h1> -->
    <router-view/>
    <div class="box">hello</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.box{
  width: 100px;
  height: 200px;
  background-color: red;
  font-size: 30px;
}


</style>
