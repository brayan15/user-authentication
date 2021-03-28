// @flow
import type { UserT } from '../store/app/users/types'
import userRestClient from '../modules/user-rest-client'

const useUpdateUser = () => {
  const updateUser = async ({ id, email, first_name, last_name }: UserT) => {
    try {
      return await userRestClient.updateUser(id, email, first_name, last_name)
    } catch (error) {
      return { hasError: true }
    }
  }

  return [updateUser]
}

export default useUpdateUser
