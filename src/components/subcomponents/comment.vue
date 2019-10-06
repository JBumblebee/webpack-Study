<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入你的评论" maxlength="150" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <!-- 主键最好用id好 -->
    <div class="cmt-list" v-for="(item , index) in comments" :key="index">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第{{ index + 1 }}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{ item.content === "" ? '此用户没有评论' : item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    <br />
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      comments: [],
      pageIndex: 1,
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            //新数据拼接旧数组
            this.comments = this.comments.concat(result.body.message);
            // this.comments = result.body.message;
          } else {
            Toast("获取评论失败！");
          }
        });
    },
    getMore(pageindex) {
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
      // 1把文本框作双向数据绑定
      // 2给提交绑定事件
      // 3提交
      // 4弹框提示
      // 5重新刷新评论列表，查看最新的评论
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空！");
      }
      this.$http.post('api/postcomment/' + this.$route.params.id,{content:this.msg.trim()}).then(function(result){
          if(result.body.status === 0 ){
              var cmt = {
                  user_name : "匿名用户",
                  add_time : Date.now(),
                  content : this.msg.trim()
              };
              this.comments.unshift(cmt);
              this.msg = "";
          }
      })
    }
  },
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 16px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>