// @flow
import type { ActionT } from '../../types'
import type { UsersStateT } from './types'
import {
  SET_LOADING_USERS,
  SET_SUCCESS_USERS,
  SET_FAILED_USERS,
  SUCCESS_UPDATE_USER,
  SET_SUCCESS_POSTS
} from './actions'
import normalizeUsers, { normalizePosts } from './helpers'

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
    case SUCCESS_UPDATE_USER:
      return { ...state, users: { ...state.users, [payload.id]: { ...payload } } }
    case SET_SUCCESS_POSTS:
      return {
        ...state,
        users: {
          ...state.users,
          [payload.id]: { ...state.users[payload.id], posts: normalizePosts(payload.posts) }
        }
      }
    case SET_FAILED_USERS: {
      return { ...state, isLoading: false }
    }
    default:
      return state
  }
}

export default reducer
