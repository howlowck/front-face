import {FETCH_TRAIN_START, FETCH_TRAIN_STATUS_SUCCESS} from '../actions/train'

export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (action.type === FETCH_TRAIN_START) {
    return {...prevState, status: 'starting'}
  }

  if (action.type === FETCH_TRAIN_STATUS_SUCCESS) {
    return {...action.data}
  }

  return {...prevState}
}
