// @flow
import { createSelector } from 'reselect'
import type { UserT } from './types'
import type { AppStateT } from '../../types'

const getUsersData = (state: AppStateT) => state.user_authentication.users

export const getUsersAsArray = createSelector(
  (state: AppStateT) => getUsersData(state).users,
  (users: { [email: string]: UserT }) => Object.keys(users)
)

export const makeGetUserByEmail = () =>
  createSelector(
    (state: AppStateT) => getUsersData(state).users,
    (_, email) => email,
    (users: { [email: string]: UserT }, email: string) => users[email] || {}
  )

export const isUsersLoading = createSelector(
  (state: AppStateT) => getUsersData(state).isLoading,
  (isLoading: boolean) => isLoading
)
