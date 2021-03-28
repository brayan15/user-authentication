// @flow
export const LOG_OUT = 'LOG_OUT'
export const SUCCEED_LOGIN = 'SUCCEED_LOGIN'
export const SET_IS_USER_LOGGED = 'SET_IS_USER_LOGGED'

export const succeedLogin = () => ({
  type: SUCCEED_LOGIN
})

export const logOut = () => ({
  type: LOG_OUT
})

export const setIsUserLogged = () => ({
  type: SET_IS_USER_LOGGED
})
