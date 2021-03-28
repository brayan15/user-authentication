// @flow
import { useDispatch } from 'react-redux'
import { userHasToken } from '../utils/helpers'
import { setIsUserLogged } from '../store/local/authentication/actions'

const useSetUser = () => {
  const dispatch = useDispatch()
  const isLogged = userHasToken()

  const setUser = () => dispatch(setIsUserLogged(isLogged))

  return [setUser]
}

export default useSetUser
