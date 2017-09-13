import {getMiddleString} from '../helpers'
import {ADVANCE_USER_DATA_FIELD, PREVIOUS_USER_DATA_FIELD, CLEAR_USER_DATA} from '../actions/userData'
import {startsWith, endsWith, set, get} from 'lodash'

export default (prevState = {currentUserFieldIndex: 0}, action) => {
  // Add your action conditionals here
  if (action.type === CLEAR_USER_DATA) {
    return {
      ...prevState,
      currentUserFieldIndex: 0
    }
  }

  if (action.type === ADVANCE_USER_DATA_FIELD) {
    const activeIndex = get(prevState, 'currentUserFieldIndex')
    return {
      ...prevState,
      currentUserFieldIndex: activeIndex + 1
    }
  }

  if (action.type === PREVIOUS_USER_DATA_FIELD) {
    const activeIndex = get(prevState, 'currentUserFieldIndex')
    return {
      ...prevState,
      currentUserFieldIndex: activeIndex - 1
    }
  }

  if (!endsWith(action.type, 'UI')) {
    return { ...prevState }
  }

  const viewName = getMiddleString(action.type)
  let newState = {...prevState}
  if (startsWith(action.type, 'OPEN')) {
    set(newState, [viewName, 'open'], true)
    newState[viewName] = {open: true}
  }

  if (startsWith(action.type, 'CLOSE')) {
    newState[viewName] = {open: false}
  }

  return newState
}
