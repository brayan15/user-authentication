// @flow
import normalizeUsers from './helpers'
import type { ActionT } from '../../types'
import type { UsersStateT } from './types'
import { SET_LOADING_USERS, SET_SUCCESS_USERS, SET_FAILED_USERS } from './actions'

const initialState = {
  users: {},
  isLoading: false
}

const reducer = (state: UsersStateT = initialState, { type, payload }: ActionT) => {
  switch (type) {
    case SET_LOADING_USERS:
      return { ...state, isLoading: true }
    case SET_SUCCESS_USERS:
      return { ...normalizeUsers(state, payload), isLoading: false }
    case SET_FAILED_USERS: {
      return { ...state, isLoading: false }
    }
    default:
      return state
  }
}

export default reducer
