// @flow
export const setUserToken = (token: string) => {
    localStorage.setItem('jwt', token.toString())
}

export const userHasToken = () => {
  const token = localStorage.getItem('jwt')

  return token !== '' && token !== null
}

export const removeUserToken = () => {
    localStorage.removeItem('jwt')
}
