import {FETCH_GET_PERSON_SUCCESS} from '../actions/person'

export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (action.type === FETCH_GET_PERSON_SUCCESS) {
    const {personId} = action.data
    const newState = {...prevState}
    newState[personId] = action.data
    return newState
  }

  return { ...prevState }
}
