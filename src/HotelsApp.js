import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'
import { Client } from './apollo'
import ApolloProvider from './providers/apolloApp'

export const HotelsApp = () => {
  return (
    <ApolloProvider client={Client}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ApolloProvider>
  )
}
