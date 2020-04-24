import * as types from './mutation-types'

const mutations = {
  // token
  [types.SET_TOKEN](state, token) {
    state.token = token
  }
}

export default mutations
