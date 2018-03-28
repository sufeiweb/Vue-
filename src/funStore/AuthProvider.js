import promiseXHR from './ServerFun'
import {API_PATH} from "./OriginName";

/**
 * 提供登录获取token，
 */
class AuthProvider {
  constructor() {
  }

  onLogin({username, password, imageCode, sessionKey}) {
    const _this = this;

    const url =API_PATH+ '';//获取token接口地址

    return promiseXHR(url, {type: 'Basic', value: null}, null, "POST")
      .then(res => {
        const data = eval("(" + res + ")");
        _this.saveTokens(data.access_token, data.refresh_token, data.expires_in);
        return data;
      }).catch(reject => {
        return "error"
      })
  }

  saveTokens(access_token, refresh_token, expires_in) {
    let exp = new Date();
    exp.setTime(exp.getTime() + expires_in * 1000 - 30000)
    document.cookie = 'access_token' + "=" + escape(access_token) + ";expires=" + exp.toGMTString();
    document.cookie = 'refresh_token' + "=" + escape(refresh_token)
  }

  setWait() {
    document.cookie = 'access_token' + "=" + escape('wait')
  }

  onRefreshToken() {
    const refreshToken = this.getCookie('refresh_token');
    const accessToken = this.getCookie('access_token');

    const url = API_PATH + '';//获取token接口地址

    this.setWait();
    return promiseXHR(url, {
      type: 'Basic',
      value: null
    }, 'grant_type=refresh_token&refresh_token=' + refreshToken, 'POST')
      .then(res => {
        const data = eval("(" + res + ")");
        //  console.log(data)
        if (data.resultCode === 400) {
          store.dispatch(
            push('/login')
          )
        } else {
          this.saveTokens(data.access_token, data.refresh_token, data.expires_in)
        }
        return data.access_token
      })
  }

  getCookie(key) {
    let aCookie = document.cookie.split("; ");
    // console.log(aCookie);
    for (let i = 0; i < aCookie.length; i++) {
      let aCrumb = aCookie[i].split("=");
      if (key === aCrumb[0])
        return unescape(aCrumb[1]);
    }
    return null;
  }

  getAccessToken() {
    if (!this.getCookie('access_token')) {
      return this.onRefreshToken()
    } else if (this.getCookie('access_token') === 'wait') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.getCookie('access_token'))
        }, 2000)
      })
    } else {
      return new Promise((resolve, reject) => {
        resolve(this.getCookie('access_token'))
      })
    }
  }
}

export default new AuthProvider()
