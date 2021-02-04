import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { urlBase } from 'api/url'

import { getAuthToken } from './../helpers/token'

// Instantiate required constructor fields
const cache = new InMemoryCache()
const httpLink = createHttpLink({
  uri: `https://cors-anywhere.herokuapp.com/http://${urlBase}/graphql` // 'https://www.yelp.com/developers/graphiql'
})

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await getAuthToken()
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? token.Authorization : '',
      'Content-Type': 'application/graphql',
      'Accept-Language': 'en-US'
    }
  }
})

const client = new ApolloClient({
  // Provide required constructor fields
  link: authLink.concat(httpLink),
  cache
})

export { client as Client }
