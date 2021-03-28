// @flow
import type { AuthenticationT } from './local/authentication/types'

export type ActionT = {
  type: string,
  payload: any
}

export type AppStateT = {
  +local: {
    +authentication: AuthenticationT
  },
  +user_authentication: {}
}
