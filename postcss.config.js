module.exports = {
    plugins: {
    //   'autoprefixer': {
    //     browsers: ['Android >= 4.0', 'iOS >= 8']
    //   },
    // px 转 rem
      'postcss-pxtorem': {
        rootValue: 37.5,
        // 需要转换的css属性，*就是所有带单位的属性
        propList: ['*']
      }
    }
  }