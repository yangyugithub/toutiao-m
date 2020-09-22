<template>
  <div id="app">
    <!-- <h1>自己的项目</h1> -->
    <router-view />
<<<<<<< HEAD
    <div class="box">hello {{aaa}}</div>
=======
    <div class="box">hello 狗茜</div>
>>>>>>> 38da803ff1947339360736cc8080614a4146c80f
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa: "憨憨",
    }
  },
}
</script>
<style lang="scss">
.box {
  width: 100px;
  height: 200px;
  background-color: red;
  font-size: 30px;
}
</style>
