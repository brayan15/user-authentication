// @flow
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import ProtectedRoute from './pages/ProtectedRoute'
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
            <ProtectedRoute exact path='/'>
              <Home />
            </ProtectedRoute>
            <Route exact path='/login'>
              <Login />
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
