// @flow
import userRestClient from '../modules/user-rest-client'

const useLogin = () => {
  const setLogin = async (email: string, password: string) => {
    try {
      return await userRestClient.login(email, password)
    } catch (error) {
      return { hasError: true, message: error.response.data.error }
    }
  }

  return [setLogin]
}

export default useLogin
