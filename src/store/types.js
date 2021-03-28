// @flow
import type { UsersStateT } from './app/users/types'
import type { AuthenticationT } from './local/authentication/types'

export type ActionT = {
  type: string,
  payload: any
}

export type AppStateT = {
  +local: {
    +authentication: AuthenticationT
  },
  +user_authentication: {
    +users: UsersStateT
  }
}
