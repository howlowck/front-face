import {FETCH_FIELD_SUCCESS} from '../actions/userData'
export default (prevState = [], action) => {
  // Add your action conditionals here
  if (action.type === FETCH_FIELD_SUCCESS) {
    const alreadyHasName = !!action.data.find(field => field.name === 'name')
    if (alreadyHasName) {
      return [...action.data]
    }
    return [{title: 'Name', name: 'name', type: 'text'}, ...action.data]
  }
  return [ ...prevState ]
}
