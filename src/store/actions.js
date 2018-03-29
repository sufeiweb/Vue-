import * as types from './types';

export default {
  loginStateTrue: ({
                     commit, state
                   }) => {
    commit(types.LOGINSTATE_TRUE);
  },//登录
  loginStateFalse: ({
                      commit, state
                    }) => {
    commit(types.LOGINSTATE_FALSE);
  },//退出
  errorStateTrue: ({
                     commit, state
                   }) => {
    commit(types.ERRORSTATE_TRUE)
  },//显示错误信息
  errorStateFalse: ({
                      commit, state
                    }) => {
    commit(types.ERRORSTATE_FALSE)
  },//隐藏错误信息
  countDownStateTrue: ({
                         commit, state
                       }) => {
    commit(types.COUNTDOWNSTATE_TRUE)
  },//倒计时开始
  countDownStateFalse: ({
                          commit, state
                        }) => {
    commit(types.COUNTDOWNSTATE_FALSE)
  },//倒计时结束
}
