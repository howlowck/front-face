import { combineEpics } from 'redux-observable'
import fetchFaceDetect from '../epics/fetchFaceDetect'
import fetchFaceIdentify from '../epics/fetchFaceIdentify'
import fetchFields from '../epics/fetchFields'
import fetchGetPerson from '../epics/fetchGetPerson'
import fetchCreatePerson from '../epics/fetchCreatePerson'
import fetchAddPersonFace from '../epics/fetchAddPersonFace'
import fetchTrain from '../epics/fetchTrain'
import fetchTrainStatus from '../epics/fetchTrainStatus'
// Import Epics Here (do not delete this line)

export default combineEpics(
  fetchFaceDetect,
  fetchGetPerson,
  fetchFields,
  fetchCreatePerson,
  fetchAddPersonFace,
  fetchTrain,
  fetchTrainStatus,
  // Add Epics Here (do not delete this line)
  fetchFaceIdentify
)
