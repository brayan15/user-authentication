//@flow
import type { ActionT } from '../../types'
import type { AuthenticationT } from './types'
import { LOG_OUT, SET_IS_USER_LOGGED, SUCCEED_LOGIN } from './actions'

const initialState = {
  isLogged: false
}

const reducer = (state: AuthenticationT = initialState, { type, payload }: ActionT) => {
  switch (type) {
    case SET_IS_USER_LOGGED:
      return { isLogged: true }
    case SUCCEED_LOGIN:
      return { isLogged: true }
    case LOG_OUT: {
      return { isLogged: false }
    }
    default:
      return state
  }
}

export default reducer
