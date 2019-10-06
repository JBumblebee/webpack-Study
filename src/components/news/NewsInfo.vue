<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr />
    <div class="content" v-html="newsinfo.content"></div>

    <!-- 评论区，以子组件的方式引用 -->
    <comment-box :id="this.id"></comment-box>

  </div>
</template>

<script>
//子组件
import comment from '../subcomponents/comment.vue';
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      //将 url 地址中传递的id值 方便往后调用
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
      this.getNewsInfo()
  },
  methods: {
    getNewsInfo() {
      this.$http.get('api/getnew/ '+ this.id).then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0];
          // console.log(result.body.message);
        } else {
          Toast("获取新闻详情失败！");
        }
      });
    }
  },
  components:{
      'comment-box' : comment
  }
};
</script>
<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 6px;

  .title {
    font-size: 16px;
    text-align: center;
    margin: 10px 0;
    color: rgb(85, 82, 82);
  }
  .subtitle {
    font-size: 13px;
    color: blueviolet;
    display: flex;
    justify-content: space-between;
  }
  .content {
      img{
          width: 100%;
      }
  }
}
</style>