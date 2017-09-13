import {FETCH_DETECT_SUCCESS} from '../actions/detect'

export default (prevState = [], action) => {
  // Add your action conditionals here
  if (action.type === FETCH_DETECT_SUCCESS) {
    return action.data
  }

  return [ ...prevState ]
}
