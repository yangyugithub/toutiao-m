<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="app-nav-bar">
      <van-button
        slot="title"
        class="search-btn"
        icon="search"
        type="info"
        round
        size="small"
      >搜索</van-button>
    </van-nav-bar>
    <!-- /导航栏 -->
     <!-- 文章频道列表 -->
    <van-tabs v-model="active">
      <van-tab 
        v-for="channel in channels" 
        :title="channel.name"
        :key="channel.id"
        >
      <ArticleList :channel="channel"></ArticleList>  
      </van-tab>
     
    </van-tabs>
    <!-- /文章频道列表 -->
    <!-- 文章新闻列表 -->
      
    <!-- /文章新闻列表 -->

  </div>
</template>

<script>
import { getUserChannels } from '@/api/user.js'
import ArticleList from './components/articleList'
export default {
  name: 'HomeIndex',
  components: {
    ArticleList
  },
  props: {},
  data () {
    return {
      active: 0 ,// 控制被激活的标签
      channels:[]
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadchannels()
  },
  mounted () {},
  methods: {
    async loadchannels(){
      const { data } = await getUserChannels()
      console.log(data);
      
      this.channels = data.data.channels
    }
  }
}
</script>
<style lang="scss">
.home-container {
  /deep/ .van-nav-bar__title {
    max-width: none;
    
  }
  .van-nav-bar{
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
}
</style>>

