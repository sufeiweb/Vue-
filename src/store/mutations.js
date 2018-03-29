import * as types from './types';

export default {
  [types.LOGINSTATE_TRUE]: (state) => {
    state.loginState = true;
  },
  [types.LOGINSTATE_FALSE]: (state) => {
    state.loginState = false;
  },
  [types.ERRORSTATE_TRUE]: (state) => {
    state.errorState = true;
  },
  [types.ERRORSTATE_FALSE]: (state) => {
    state.errorState = false;
  },
  [types.COUNTDOWNSTATE_TRUE]: (state) => {
    state.countDownState = true;
  },
  [types.COUNTDOWNSTATE_FALSE]: (state) => {
    state.countDownState = false;
  },
}
