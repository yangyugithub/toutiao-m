<template>
  <div class="article_details">
      文章详情
  </div>
</template>

<script>
import getArticleById from "@/api/artlice.js"
export default {
    name:'articleDetails',
    created(){
        console.log(this.$route.params.articleId);
        this.getarticleDelails()
    },
    methods:{
        async getarticleDelails(){
            const { data } = await getArticleById(this.$route.params.articleId)
            console.log(data);
            
        }
    }
}
</script>

<style>

</style>