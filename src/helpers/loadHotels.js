/* eslint-disable no-unused-vars */
import { apiGet } from 'api'
import { urlBase } from 'api/url'
import { mockBurritosSanFrancisco } from './../mock'
import { token } from './token'

export const loadHotels = async (input) => {
  if (!input) return []
  const { term = '', location = '', limit = 10 } = input
  const protocol = 'http'
  const query = `search?term=${term}&location=${location}&limit=${limit}`
  const url = `${protocol}://${urlBase}/businesses/${query}`
  const { businesses } = await apiGet(url, token)

  return await businesses
}
