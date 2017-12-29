import { TOGGLE_SPLASH } from '../actions'

const initialState = true

export default function (state = initialState, action) {
  switch(action.type) {
    case TOGGLE_SPLASH:
      return !state
    default:
      return state
  }
}
