import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import displayImageReducer from '../reducers/displayImage'
import displaySizeReducer from '../reducers/displaySize'
import statusReducer from '../reducers/status'
import detectFacesReducer from '../reducers/detectFaces'
import identifyFacesReducer from '../reducers/identifyFaces'
import personsReducer from '../reducers/persons'
import fieldsReducer from '../reducers/fields'
import viewsReducer from '../reducers/views'
import userDataReducer from '../reducers/userData'
import selectedFaceReducer from '../reducers/selectedFace'
import trainingStatusReducer from '../reducers/trainingStatus'
// Import Reducers Here (do not delete this line)

export default combineReducers({
  displayImage: displayImageReducer,
  displaySize: displaySizeReducer,
  status: statusReducer,
  detectFaces: detectFacesReducer,
  identifyFaces: identifyFacesReducer,
  persons: personsReducer,
  fields: fieldsReducer,
  views: viewsReducer,
  userData: userDataReducer,
    selectedFace: selectedFaceReducer,
    trainingStatus: trainingStatusReducer,
    // Add Reducers Here (do not delete this line)
  routing: routerReducer
})
