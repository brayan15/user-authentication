import type { AppStateT } from '../../types'
import { createSelector } from 'reselect'

const getAuthenticationData = (state: AppStateT) => state.local.authentication

export const isUserLogged = createSelector(
  (state: AppStateT) => getAuthenticationData(state).isLogged,
  (authentication: boolean) => authentication
)
