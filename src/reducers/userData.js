import { SET_USER_DATA, CLEAR_USER_DATA } from '../actions/userData'
export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (action.type === SET_USER_DATA) {
    const newState = {...prevState}
    const payload = action.data
    newState[payload.name] = payload.value
    return newState
  }

  if (action.type === CLEAR_USER_DATA) {
    return {}
  }

  return { ...prevState }
}
