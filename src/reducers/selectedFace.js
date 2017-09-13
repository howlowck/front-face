import {OPEN_USER_DATA_FORM_UI} from '../actions/ui'
export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (action.type === OPEN_USER_DATA_FORM_UI) {
    const {faceId} = action.data
    return {
      ...prevState,
      faceId
    }
  }

  return { ...prevState }
}
