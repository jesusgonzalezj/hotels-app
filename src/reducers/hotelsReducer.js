import { types } from '../types/types'

const initialState = {
  hotels: [],
  active: null
}

export const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HOTELS_ACTIVE:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }
    case types.HOTELS_LOAD:
      return {
        ...state,
        hotels: [...action.payload]
      }
    case types.HOTELS_DELETE:
      return {
        ...state,
        active: {}
      }
    default:
      return state
  }
}
