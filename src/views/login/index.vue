<template>
  <div class="loginIndex">
    <div class="login_header">登录</div>
    <!-- 手机号  验证码 -->
    <div class="login_con">
      <div class="login_con_item login_con_item1">
        <img src="@/assets/my/phones.png" alt="">
        <input type="text" placeholder="请输入您的手机号" ref="phone" v-model="mobile">
      </div>
      <div class="login_con_item login_con_item2">
        <img src="@/assets/my/password.png" alt="">
        <input type="text" placeholder="请输入验证码" ref="password" v-model="mobileCode">
        <span class="getCode" :class="{'reg-codetxt-no':isCalss}" @click="clickCode">{{codetxt}}</span>
      </div>
    </div>
    <div class="login_btn">
      登录
    </div>

    <popup v-if="isPopup" :message="message"></popup>

  </div>
</template>

<script>

import popup from '@/views/common/error-popup.vue'
import { getCode, getUserInfo } from '@/api/article'

export default {
  data() {
    return {
      codetxt: "获取验证码",
      isCalss: false,
      mobile: "",
      mobileCode: "",
      isPopup: false,
      message: "",
    }
  },
  components: {
    popup,
  },
  created() {
    // this.initUserInfo()
  },
  methods: {

    // async initUserInfo() {
    // const { data } = await getUserInfo({
    //   'Content-Type': application / json,
    //   mobile: '',
    //   code: '',

    // });
    // console.log('initUserInfo', data)
    // },

    timer() {//定时器
      let sec = 60;
      let vm = this;
      for (var i = 0; i <= 60; i++) {
        setTimeout(function () {
          if (sec != 0) {
            sec--;
            vm.isCalss = true;
            vm.codetxt = sec + "秒重新发送";
          } else {
            sec = 60; // 如果倒计时结束 就让 获取验证码 显示出来
            vm.isCalss = false;
            vm.codetxt = '获取验证码';
          }
        }, i * 1000)
      }
    },
    //1s报错弹出框消失
    clearStorage() {
      let time = setTimeout(() => {
        if (this.isPopup == true) {
          this.isPopup = false;
        }
      }, 1000)
    },
    //获取手机验证码时间
    clickCode() {
      console.log('获取验证码');
      let vm = this;

      if (vm.mobile == '' || !(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(vm.mobile))) {
        vm.isPopup = true;
        vm.message = "请输入正确手机号";
        vm.clearStorage(); // 1s后弹框消失
      } else {

        const { data } = getCode({
          mobile: this.mobile,
        });
        console.log('getCode', data)

        // 登录
        // const { data } = getUserInfo({
        //   mobile: this.mobile,
        //   code: this.mobileCode,
        // });
        // console.log('initUserInfo', data)
      }

    },
  },

}
</script>

<style lang="scss" scoped>
.loginIndex {
  .login_header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    background-color: #3296fa;
  }
  .login_con {
    width: 100%;
    padding: 0 14px 0 14px;
    box-sizing: border-box;
    .login_con_item {
      padding: 20px 0 12px 0;
      border-bottom: 1px solid #eee;
      position: relative;
      img {
        width: 20px;
        height: 30px;
        position: absolute;
        left: 6px;
        bottom: 12px;
      }
      input {
        width: 70%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 18px;
        background-color: #fff;
        margin-left: 30px;
      }
      input::-moz-placeholder {
        color: #c0c0c0;
        font-size: 18px;
      }
    }
    .login_con_item2 {
      input {
        width: 40%;
        border-right: 2px solid #ccc;
      }
      .getCode {
        display: inline-block;
        padding: 10px 16px;
        font-size: 18px;
        color: #666;
        background-color: #ededed;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 20px;
      }
    }
  }
  .login_btn {
    width: 90%;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #6db4fb;
    margin: 20px auto;
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>

