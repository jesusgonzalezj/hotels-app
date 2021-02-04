import { gql } from '@apollo/client'

export const SEARCH = gql`
  query search($term: String, $location: String, $limit: Int) {
    search(term: $term, location: $location, limit: $limit) {
      total
      business {
        name
        url
      }
    }
  }
`

export const TEST_QUERY = gql`
  query Search($term: String!, $location: String!) {
    search(term: $term, location: $location) {
      total
      business {
        name
        url
        rating
      }
    }
  }
`

export const OTHER = gql`
  query business($id: String) {
    business(id: "garaje-san-francisco") {
      name
      id
      alias
      rating
      url
    }
  }
`

export const SIMPLE_TEXT_QUERY = ({
  term = 'burrito',
  location = 'san francisco',
  limit = 10
}) => `{
  search(term: "${term}", location: "${location}",limit: "${limit}") {
    total
    business {
      name
      url
    }
  }`
