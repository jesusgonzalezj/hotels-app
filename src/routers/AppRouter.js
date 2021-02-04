import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { MainScreen } from '../components/main/MainScreen'
import { PrivateRoute } from './PrivateRoute'
import { startLoadingHotels } from '../actions/hotels'

export const AppRouter = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startLoadingHotels())
    // eslint-disable-next-line
  }, [])
  /* if (checking) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1>Please wait...</h1>
      </div>
    )
  } */
  return (
    <Router>
      <div>
        <Switch>
          {/* <PublicRoute
            isAuthenticated={isLoggedIn}
            path='/auth'
            component={AuthRouter}
          /> */}
          <PrivateRoute exact path='/' component={MainScreen} />
          <Redirect to='/' /> {/* auth/login */}
        </Switch>
      </div>
    </Router>
  )
}
