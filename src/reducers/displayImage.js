import { SET_PHOTO } from '../actions/photo'

export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (action.type === SET_PHOTO) {
    return {
      base64: action.data
    }
  }

  return { ...prevState }
}
