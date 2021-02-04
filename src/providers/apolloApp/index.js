import React from 'react'
import { ApolloProvider } from '@apollo/client'

export default ({ children, client }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)
