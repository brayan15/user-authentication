// @flow
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import LoginForm from './components/login-form'
import AppContainer from './components/app-container'
// $FlowFixMe
import './styles/main.scss'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <AppContainer>
          {/*Router goes here*/}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <LoginForm />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </AppContainer>
      </BrowserRouter>
    </div>
  )
}

export default App
