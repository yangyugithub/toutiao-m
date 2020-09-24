<template>
  <div class="startIndex">
    <van-swipe :autoplay="5000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
        <van-button round plain type="info" v-if="index==2" to="/lay" >立 即 体 验</van-button>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {
  name: "startIndex",
  data() {
    return {
      images: [
        require("../../assets/start_one.png"),
        require("../../assets/start_two.png"),
        require("../../assets/start_three.png")
      ]
    };
  }
};
</script>

<style lang="scss">
.van-swipe-item img {
      display: block;
      width: 100%;
      height:99%;
      font-size: 0;
    }

.van-swipe-item{
    height: 100%;
    position: relative;
    overflow: hidden;
    .van-button{
        position: absolute;
        bottom: 60px;
        left: 50%;
        margin-left: -45px;
    }
    
}
</style>