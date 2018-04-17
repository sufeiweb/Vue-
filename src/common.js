const config = require('../config');

const md5 = require('js-md5')

exports.install = function (Vue, options) {
  /**
   * 文本拷贝
   * @param objId id名
   * @param tipInfo
   */
  Vue.prototype.copy = function (objId, tipInfo) {
    let Url = $("#" + objId);
    Url.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
  };
  /**
   * 错误信息提示，
   * @param str 信息
   * @param times 显示时间
   * @constructor
   */
  Vue.prototype.ErrorMessage = function (str, times) {
    let _this = this;
    _this.$store.state.errorMessage = str;
    _this.$store.dispatch('errorStateTrue');//显示错误信息
    setTimeout(() => {
      "use strict";
      _this.$store.dispatch('errorStateFalse');//显示错误信息
    }, times ? times : 2000)
  };
  /**
   * 过滤HTML标签
   * @param str
   * @returns {*}
   */
  Vue.prototype.removeHTMLTag = function (str) {
    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str = str.replace(/ /ig, '');//去掉
    return str;
  };

  /**
   * 输入框只能输入数字
   * @param str
   * @returns {*}
   */
  Vue.prototype.onlyNumber = function (str) {
    if (isNaN(str)) {
      return false;
    } else {
      return str;
    }
  }

  Vue.prototype.getCode = function (total_micro_second) {
    let _this = this;
    count_down(_this, total_micro_second)
  };

  function count_down(that, total_micro_second) {
    that.$store.dispatch('countDownStateTrue');//倒计时开始
    if (total_micro_second <= 0) {
      that.$store.dispatch('countDownStateFalse');//倒计时开始
      that.$store.state.countDownTxt = "重新发送";
      // timeout则跳出递归
      return;
    }
    // 渲染倒计时时钟
    that.$store.state.countDownTxt = date_format(total_micro_second) + "s";
    that.$store.dispatch('countDownStateTrue');//倒计时开始

    setTimeout(function () {
      // 放在最后--
      total_micro_second -= 10;
      count_down(that, total_micro_second);
    }, 10)
  }
  Vue.prototype.MD5 = function (str) {
    return md5(str)
  }


}

function date_format(micro_second) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix((second - hr * 3600 - min * 60)); // equal to => var sec = second % 60;
  // 毫秒位，保留2位
  var micro_sec = fill_zero_prefix(Math.floor((micro_second % 1000) / 10));

  return sec;
}

// 位数不足补零
function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}
