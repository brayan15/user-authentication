// @flow
import * as React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { isUserLogged } from '../../store/local/authentication/selectors'

type PropsT = {
  children: React.Node
}

const ProtectedRoute = ({ children, ...rest }: PropsT) => {
  const isLogged = useSelector(isUserLogged)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }}
    />
  )
}

export default ProtectedRoute
