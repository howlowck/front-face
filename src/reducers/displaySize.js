import {SET_DISPLAY_SIZE} from '../actions/size'

export default (prevState, action) => {
  // Add your action conditionals here
  if (action.type === SET_DISPLAY_SIZE) {
    return {...action.data}
  }

  return { ...prevState }
}
