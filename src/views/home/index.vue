<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="app-nav-bar">
      <van-button slot="title" class="search-btn" icon="search" type="info" round size="small">搜索</van-button>
    </van-nav-bar>
    <!-- /导航栏 -->
    <!-- 文章频道列表 -->
    <van-tabs v-model="active">
      <van-tab v-for="channel in channels" :title="channel.name" :key="channel.id">
        <ArticleList :channel="channel"></ArticleList>
      </van-tab>
      <div
        slot="nav-right"
        class="nav-right"
        @click="popupShow = true"
      >
        <van-icon name="wap-nav" />
      </div>
    </van-tabs>
    <!-- /文章频道列表 -->
    <!-- 弹出层 -->
    <van-popup
      v-model="popupShow"
      position="bottom"
      closeable
      close-icon-position="top-left"
      :style="{ height: '90%' }"
      get-container="body"
      round
    >
<Popup :popChannels="channels"/>

    
    
    </van-popup>
    <!-- /弹出层 -->
  </div>
</template>

<script>
import { getUserChannels } from "@/api/user.js";
import ArticleList from "./components/articleList";
import Popup from './components/popup'
export default {
  name: "HomeIndex",
  components: {
    ArticleList,
    Popup
  },
  props: {},
  data() {
    return {
      active: 0, // 控制被激活的标签
      channels: [],
      popupShow: true
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loadchannels();
  },
  mounted() {},
  methods: {
    async loadchannels() {
      const { data } = await getUserChannels();
      console.log(data);

      this.channels = data.data.channels;
    }
  }
};
</script>
<style lang="scss">
.home-container {
  /deep/ .van-nav-bar__title {
    max-width: none;
  }
  .van-nav-bar {
    background: #3296fa;
  }
  .search-btn {
    width: 277px;
    height: 32px;
    background: #5babfb;
    border: none;
    .van-icon {
      font-size: 16px;
    }
    .van-button__text {
      font-size: 14px;
    }
  }
  .van-tabs {
    padding-right: 50px;
    .nav-right {
      width: 50px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      right: 0;
      text-align: center;
      background-color: white;
      .van-icon {
        font-size: 20px;
      }
    }
  }
}
</style>>

