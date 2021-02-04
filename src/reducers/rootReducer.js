import { combineReducers } from 'redux'

import { hotelsReducer } from './hotelsReducer'
import { uiReducer } from './uiReducer'

export const reducers = combineReducers({
  ui: uiReducer,
  hotels: hotelsReducer
})
