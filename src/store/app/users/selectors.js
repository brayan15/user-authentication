// @flow
import { createSelector } from 'reselect'
import type { UserT } from './types'
import type { AppStateT } from '../../types'

const getUsersData = (state: AppStateT) => state.user_authentication.users

export const getUsersAsArray = createSelector(
  (state: AppStateT) => getUsersData(state).users,
  (users: { [id: number]: UserT }) => Object.keys(users)
)

export const makeGetUserById = () =>
  createSelector(
    (state: AppStateT) => getUsersData(state).users,
    (_, id) => id,
    (users: { [id: number]: UserT }, id: number) => users[id] || {}
  )

export const isUsersLoading = createSelector(
  (state: AppStateT) => getUsersData(state).isLoading,
  (isLoading: boolean) => isLoading
)

export const makeGetPostsByUserIdAsArray = () => {
  const getUser = makeGetUserById()

  return createSelector(getUser, (user: UserT) => Object.keys(user.posts))
}

export const makeGetPostById = () => {
  const getUser = makeGetUserById()

  return createSelector(
    getUser,
    (_, __, postId) => postId,
    (user: UserT, postId: number) => user.posts[postId] || {}
  )
}
