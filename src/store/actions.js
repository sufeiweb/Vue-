import * as types from './types';

export default {
  loginStateTrue: ({
                     commit, state
                   }) => {
    commit(types.LOGINSTATE_TRUE);
  },
  loginStateFalse: ({
                      commit, state
                    }) => {
    commit(types.LOGINSTATE_FALSE);
  }
}
