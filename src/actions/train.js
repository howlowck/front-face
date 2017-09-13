export const FETCH_TRAIN_START = 'FETCH_TRAIN_START'
export const FETCH_TRAIN_SUCCESS = 'FETCH_TRAIN_SUCCESS'
export const FETCH_TRAIN_STATUS_START = 'FETCH_TRAIN_STATUS_START'
export const FETCH_TRAIN_STATUS_SUCCESS = 'FETCH_TRAIN_STATUS_SUCCESS'
// Add Action String Constant Here (do not delete this line)

export const fetchTrainStart = (data) => ({
  type: FETCH_TRAIN_START,
  data
})

export const fetchTrainSuccess = (data) => ({
  type: FETCH_TRAIN_SUCCESS,
  data
})

export const fetchTrainStatusStart = (data) => ({
  type: FETCH_TRAIN_STATUS_START,
  data
})

export const fetchTrainStatusSuccess = (data) => ({
  type: FETCH_TRAIN_STATUS_SUCCESS,
  data
})

// Add Action Creator Here (do not delete this line)
