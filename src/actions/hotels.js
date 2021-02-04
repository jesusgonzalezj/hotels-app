import { loadReviews } from 'helpers/loadReviews'

// import { db } from '../firebase/firebase-config'
import { loadHotels } from '../helpers/loadHotels'
import { types } from '../types/types'
import { finishLoading, startLoading } from './ui'

export const activeHotel = (id, hotel) => {
  return async (dispatch) => {
    const withReviews = await loadReviews(id)
    dispatch(
      setActiveHotel(id, { ...hotel, reviews: withReviews ? withReviews : [] })
    )
  }
}

export const setActiveHotel = (id, hotel) => ({
  type: types.HOTELS_ACTIVE,
  payload: {
    id,
    ...hotel
  }
})

export const startLoadingHotels = (input) => {
  return async (dispatch) => {
    dispatch(cleanActive())
    dispatch(startLoading(types.UI_START_LOADING))
    const hotels = await loadHotels(input)
    dispatch(finishLoading(types.UI_FINISH_LOADING))
    dispatch(setHotels(hotels))
  }
}

export const cleanActive = () => ({
  type: types.HOTELS_DELETE
})

export const setHotels = (hotels) => ({
  type: types.HOTELS_LOAD,
  payload: hotels
})
