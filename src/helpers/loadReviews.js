import { apiGet } from 'api'
import { protocol, urlBase } from 'api/url'
import { token } from './token'

export const loadReviews = async (id) => {
  const url = `${protocol}://${urlBase}/businesses/${id}/reviews`
  const { reviews } = await apiGet(url, token)
  console.log(reviews)
  return await reviews
}
