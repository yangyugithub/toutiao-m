<template>
  <div class="login_and_register">
    <div class="not_login" v-show="isShows">
      <div class="myIdx_top">
        <div class="myIdx_top_pos">
          <div class="phone_box" align="center">
            <img src="../../assets/my/phone.png" alt="">
          </div>
          <div class="register">
            <span>登录&nbsp;/&nbsp;</span>
            <span>注册</span>
          </div>
        </div>
      </div>
      <div class="myIdx_middle">
        <div class="middle1">
          <img src="../../assets/my/star.png" alt="">
          <p>收藏</p>
        </div>
        <div class="middle2">
          <img src="../../assets/my/time.png" alt="">
          <p>历史</p>
        </div>
      </div>
      <div class="myIdx_list">
        <div class="clearfix">
          <span>消息通知</span>
          <img class="fr clearfix" src="../../assets/right_icon.png" alt="">
        </div>
        <div class="clearfix">
          <span>小智同学</span>
          <img class="fr clearfix" src="../../assets/right_icon.png" alt="">
        </div>
      </div>
    </div>

    <div class="login_in" v-show="isShow">
      <div class="login_in_top">
        <div class="avatar_box">
          <div class="avatar">
            <img src="../../assets/my/star.png" alt="">
          </div>
          <div class="author_name">
            <span>黑马头条号</span>
          </div>
          <div class="edit_data fr clearfix">
            <span>编辑资料</span>
          </div>
        </div>
        <div class="info_detail">
          <div>
            <p>8</p>
            <p>头条</p>
          </div>
          <div>
            <p>66</p>
            <p>关注</p>
          </div>
          <div>
            <p>88</p>
            <p>粉丝</p>
          </div>
          <div>
            <p>88</p>
            <p>获赞</p>
          </div>
        </div>
      </div>
      <div class="myIdx_middle">
        <div class="middle1">
          <img src="../../assets/my/star.png" alt="">
          <p>收藏</p>
        </div>
        <div class="middle2">
          <img src="../../assets/my/time.png" alt="">
          <p>历史</p>
        </div>
      </div>
      <div class="myIdx_list">
        <div class="clearfix">
          <span>消息通知</span>
          <img class="fr clearfix" src="../../assets/right_icon.png" alt="">
        </div>
        <div class="clearfix">
          <span>小智同学</span>
          <img class="fr clearfix" src="../../assets/right_icon.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      isShows: false,
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.not_login {
  padding-bottom: 2rem;
  box-sizing: border-box;
  background: #f5f7f9;
}
.myIdx_top {
  width: 100%;
  height: 200px;
  background-color: #ccc;
  background-image: url("../../assets/my/bg.png");
  background-size: 100% 100%;
  position: relative;
  .myIdx_top_pos {
    width: 100px;
    height: auto;
    position: absolute;
    top: 20%;
    left: 140px;
    .phone_box {
      width: 100px;
      height: 100px;
      background-color: #fff;
      border-radius: 50%;
      img {
        width: 52px;
        height: 68px;
        margin-top: 20px;
      }
    }
    .register {
      width: 100px;
      text-align: center;
      padding-top: 20px;
      box-sizing: border-box;
      span {
        color: #fff;
        font-size: 20px;
      }
    }
  }
}
.myIdx_middle {
  width: 100%;
  height: 100px;
  display: flex;
  padding: 20px 0;
  box-sizing: border-box;
  div {
    flex: 1;
    text-align: center;
    img {
      width: 30px;
      height: 30px;
      margin: 16px 0;
    }
    p {
      color: #333;
      font-size: 16px;
      margin: 0px 0;
    }
  }
  .middle1 {
    border-right: 1px solid #edeff3;
  }
}
.myIdx_list {
  width: 100%;
  padding-left: 20px;
  box-sizing: border-box;
  color: #333;
  font-size: 16px;
  div {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #edeff3;
    img {
      margin: 16px 16px 0 0;
    }
  }
}
.login_in {
  .login_in_top {
    padding: 50px 32px 0 32px;
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    background-image: url("../../assets/my/bg.png");

    .avatar_box > div {
      height: 80px;
      flex: 1;
      vertical-align: middle;
    }
    .avatar_box {
      height: 80px;
      display: flex;
      vertical-align: middle;
      .avatar {
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
      }
      .author_name {
        color: #fff;
        font-size: 16px;
        box-sizing: border-box;
        margin-top: 26px;
      }
      .edit_data > span {
        display: inline-block;
        background-color: #fff;
        border-radius: 15px;
        padding: 6px 16px;
        box-sizing: border-box;
        vertical-align: middle;
        margin-top: 23px;
      }
    }
    .info_detail {
      display: flex;
      div {
        flex: 1;
        line-height: 10px;
        text-align: center;
        p {
          color: #fff;
          font-size: 16px;
        }
      }
    }
  }
}
</style>

