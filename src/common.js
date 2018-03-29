const config = require('../config');

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

};
