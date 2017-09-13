export const FETCH_GET_PERSON_START = 'FETCH_GET_PERSON_START'
export const FETCH_GET_PERSON_SUCCESS = 'FETCH_GET_PERSON_SUCCESS'
export const FETCH_ADD_PERSON_FACE_START = 'FETCH_ADD_PERSON_FACE_START'
export const FETCH_ADD_PERSON_FACE_SUCCESS = 'FETCH_ADD_PERSON_FACE_SUCCESS'
export const FETCH_CREATE_PERSON_START = 'FETCH_CREATE_PERSON_START'
export const FETCH_CREATE_PERSON_SUCCESS = 'FETCH_CREATE_PERSON_SUCCESS'
// Add Action String Constant Here (do not delete this line)

export const fetchGetPersonStart = (data) => ({
  type: FETCH_GET_PERSON_START,
  data
})

export const fetchGetPersonSuccess = (data) => ({
  type: FETCH_GET_PERSON_SUCCESS,
  data
})

export const fetchAddPersonFaceStart = (data) => ({
  type: FETCH_ADD_PERSON_FACE_START,
  data
})

export const fetchAddPersonFaceSuccess = (data) => ({
  type: FETCH_ADD_PERSON_FACE_SUCCESS,
  data
})

export const fetchCreatePersonStart = (data) => ({
  type: FETCH_CREATE_PERSON_START,
  data
})

export const fetchCreatePersonSuccess = (data) => ({
  type: FETCH_CREATE_PERSON_SUCCESS,
  data
})

// Add Action Creator Here (do not delete this line)
