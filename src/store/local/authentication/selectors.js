import { createSelector } from 'reselect'
import type { AppStateT } from '../../types'

const getAuthenticationData = (state: AppStateT) => state.local.authentication

export const isUserLogged = createSelector(
  (state: AppStateT) => getAuthenticationData(state).isLogged,
  (authentication: boolean) => authentication
)
