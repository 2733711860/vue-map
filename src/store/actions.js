import * as types from './mutation-types'

// token
export const setToken = function({ commit }, token) {
  commit(types.SET_TOKEN, token)
}
