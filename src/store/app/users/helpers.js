// @flow
import type { UsersStateT, UserT } from './types'

const normalizeUsers = (state: UsersStateT, payload: Array<UserT>) => {
  const users = payload.reduce(
    (acc, currentValue: UserT) => ({
      ...acc,
      // Assuming email is unique
      [currentValue.email.toString()]: {
        ...currentValue
      }
    }),
    {}
  )

  return { ...state, users }
}

export default normalizeUsers
