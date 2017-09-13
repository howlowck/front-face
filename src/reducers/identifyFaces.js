import { FETCH_IDENTIFY_SUCCESS } from '../actions/identify'

export default (prevState = [], action) => {
  // Add your action conditionals here
  if (action.type === FETCH_IDENTIFY_SUCCESS) {
    return [...action.data]
  }
  return [ ...prevState ]
}
