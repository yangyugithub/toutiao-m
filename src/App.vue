<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
}
</script>
<style lang="scss">
#app {
  height: 100%;
  overflow: hidden;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix::after {
  content: ""; /*内容为空*/
  display: block; /*显示为块状元素*/
  width: 0; /*宽0*/
  height: 0; /*高0*/
  visibility: hidden; /*隐藏*/
  clear: both; /*左右不允许有浮动元素（左右浮动都清除）*/
}
.clearfix {
  zoom: 1;
}
</style>
