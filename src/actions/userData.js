export const FETCH_FIELD_START = 'FETCH_FIELD_START'
export const FETCH_FIELD_SUCCESS = 'FETCH_FIELD_SUCCESS'
export const SET_USER_DATA = 'SET_USER_DATA'
export const SUBMIT_USER_DATA = 'SUBMIT_USER_DATA'
export const ADVANCE_USER_DATA_FIELD = 'ADVANCE_USER_DATA_FIELD'
export const PREVIOUS_USER_DATA_FIELD = 'PREVIOUS_USER_DATA_FIELD'
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA'
// Add Action String Constant Here (do not delete this line)

export const fetchFieldStart = (data) => ({
  type: FETCH_FIELD_START,
  data
})

export const fetchFieldSuccess = (data) => ({
  type: FETCH_FIELD_SUCCESS,
  data
})

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  data
})

export const submitUserData = (data) => ({
  type: SUBMIT_USER_DATA,
  data
})

export const advanceUserDataField = (data) => ({
  type: ADVANCE_USER_DATA_FIELD,
  data
})

export const previousUserDataField = (data) => ({
  type: PREVIOUS_USER_DATA_FIELD,
  data
})

export const clearUserData = (data) => ({
  type: CLEAR_USER_DATA,
  data
})

// Add Action Creator Here (do not delete this line)
