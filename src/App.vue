<template>
  <div id="app">
    <!-- <h1>自己的项目</h1> -->
    <router-view />
    <div class="box">hello 狗禹</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa1: "123",
      aaa2: "123",
      aaa3: "123",
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
