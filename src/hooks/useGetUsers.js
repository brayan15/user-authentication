// @flow
import userRestClient from '../modules/user-rest-client'

const useGetUsers = () => {
  const getUsers = async () => {
    try {
      return await userRestClient.getUsers()
    } catch (error) {
      return { hasError: true }
    }
  }

  return [getUsers]
}

export default useGetUsers
