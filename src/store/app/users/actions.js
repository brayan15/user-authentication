// @flow
import type { PostT, UserT } from './types'

export const SET_FAILED_USERS = 'SET_FAILED_USERS'
export const SET_LOADING_USERS = 'SET_LOADING_USERS'
export const SET_SUCCESS_USERS = 'SET_SUCCESS_USERS'
export const SET_SUCCESS_POSTS = 'SET_SUCCESS_POSTS'
export const SUCCESS_UPDATE_USER = 'SUCCESS_UPDATE_USER'

export const setLoadingUsers = () => ({
  type: SET_LOADING_USERS
})

export const setSuccessUsers = (users: Array<UserT>) => ({
  type: SET_SUCCESS_USERS,
  payload: users
})

export const setFailedUsers = () => ({
  type: SET_FAILED_USERS
})

export const successUpdateUser = (user: UserT) => ({
  type: SUCCESS_UPDATE_USER,
  payload: user
})

export const setSuccessPosts = (posts: Array<PostT>, id: number) => ({
  type: SET_SUCCESS_POSTS,
  payload: { posts, id }
})
