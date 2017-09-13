export const FETCH_DETECT_START = 'FETCH_DETECT_START'
export const FETCH_DETECT_SUCCESS = 'FETCH_DETECT_SUCCESS'
// Add Action String Constant Here (do not delete this line)

export const fetchDetectStart = (data) => ({
  type: FETCH_DETECT_START,
  data
})

export const fetchDetectSuccess = (data) => ({
  type: FETCH_DETECT_SUCCESS,
  data
})

// Add Action Creator Here (do not delete this line)
