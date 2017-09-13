export const FETCH_IDENTIFY_START = 'FETCH_IDENTIFY_START'
export const FETCH_IDENTIFY_SUCCESS = 'FETCH_IDENTIFY_SUCCESS'
// Add Action String Constant Here (do not delete this line)

export const fetchIdentifyStart = (data) => ({
  type: FETCH_IDENTIFY_START,
  data
})

export const fetchIdentifySuccess = (data) => ({
  type: FETCH_IDENTIFY_SUCCESS,
  data
})

// Add Action Creator Here (do not delete this line)
