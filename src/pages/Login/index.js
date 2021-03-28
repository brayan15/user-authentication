//@flow
import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isUserLogged } from '../../store/local/authentication/selectors'
import LoginForm from '../../components/login-form'

const Login = () => {
  const isLogged = useSelector(isUserLogged)

  return isLogged ? <Redirect to='/' /> : <LoginForm />
}

export default Login
