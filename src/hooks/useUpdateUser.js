// @flow
import userRestClient from '../modules/user-rest-client'
import type { UpdateUserT } from '../store/app/users/types'

type UseUpdateUserT = UpdateUserT & {
  id: number
}

const useUpdateUser = () => {
  const updateUser = async ({ id, email, first_name, last_name }: UseUpdateUserT) => {
    try {
      return await userRestClient.updateUser(id, email, first_name, last_name)
    } catch (error) {
      return { hasError: true }
    }
  }

  return [updateUser]
}

export default useUpdateUser
