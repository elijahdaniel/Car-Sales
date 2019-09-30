import { ADD_FEATURE, REMOVE_FEATURE } from '../actions'

function additionalPrice(state = 0, action) {
  switch (action.type) {
    case ADD_FEATURE:
      return state + action.payload.price
    case REMOVE_FEATURE:
      return state - action.payload.price
    default:
      return state
  }
}

export default additionalPrice
