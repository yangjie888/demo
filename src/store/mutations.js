import TYPES from './mutation-types.js'
import { setToken } from '@/utils/auth'
export default {
  [TYPES.SET_TOKEN] (state, token) {
    state.token = token
    setToken(token)
  }
}
