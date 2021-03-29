// @flow
import type { PostT, UsersStateT, UserT } from './types'

const normalizeUsers = (state: UsersStateT, payload: Array<UserT>) => {
  const users = payload.reduce(
    (acc, currentValue: UserT) => ({
      ...acc,
      [currentValue.id]: {
        ...currentValue,
        posts: {}
      }
    }),
    {}
  )

  return { ...state, users }
}

export const normalizePosts = (payload: Array<PostT>) => {
  const posts = payload.reduce(
    (acc, currentValue: PostT) => ({
      ...acc,
      [currentValue.id]: {
        ...currentValue
      }
    }),
    {}
  )

  return posts
}

export default normalizeUsers
