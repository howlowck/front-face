import {startsWith, camelCase, set} from 'lodash'

function getApiName (actionType) {
  let typeArray = actionType.split('_')
  typeArray.shift()
  typeArray.pop()
  return camelCase(typeArray.join('-'))
}

function getApiStatus (actionType) {
  let typeArray = actionType.split('_')
  const status = typeArray.pop()
  return status.toLowerCase()
}

export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (!startsWith(action.type, 'FETCH')) {
    return { ...prevState }
  }

  const nextState = { ...prevState }
  const name = getApiName(action.type)
  const status = getApiStatus(action.type)
  return set(nextState, [name], status)
}
