<template>
  <div class="popup">
    <van-cell-group>
      <van-cell title="我的频道">
        <van-button type="danger" plain size="mini" round>编 辑</van-button>
      </van-cell>
    </van-cell-group>
    <van-grid :gutter="10">
      <van-grid-item v-for="(channels,index) in popChannels" :key="index" :text="channels.name" />
    </van-grid>
     <van-cell-group>
      <van-cell title="频道推荐"/>
    </van-cell-group>
    <van-grid :gutter="10" clickable>
      <van-grid-item v-for="(item,index) in getRecommen" :key="index" :text="item.name" @click="addChannels(item)" />
    </van-grid>
  </div>
</template>

<script>
import {getAllchannels} from '@/api/popchannels'
export default {
  name: "popup",
  props: {
    popChannels: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data(){
    return {
        recommend:[]
    }
  },
  created() {
    this.getAllchannels()
  },
    computed:{
        getRecommen(){
            return this.recommend.filter(item=>{
             return !this.popChannels.find(it=>{
                 return it.id==item.id
             })
         })
        }
    },
  methods:{
     async getAllchannels(){
         const { data } = await getAllchannels()
         console.log(data);
         this.recommend = data.data.channels
         
      },
      addChannels(item){
          this.popChannels.push(item)
      }
  }
};
</script>

<style lang="scss">
.popup {
  padding-top: 60px;
  .van-hairline--top-bottom::after {
    border-width: 0;
  }
  .van-grid-item__content {
    background-color: #f4f5f6;
    color: #333333;
    font-size: 18px;
  }
}
</style>