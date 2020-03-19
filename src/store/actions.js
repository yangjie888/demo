import TYPES from './mutation-types'
export default {
  updateToken ({ commit }) {
    return new Promise((resolve, reject) => {
      commit(TYPES.SET_TOKEN, '123456')
      resolve()
    })
  }
}
