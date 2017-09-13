import { FETCH_CREATE_PERSON_START, fetchCreatePersonSuccess, fetchAddPersonFaceStart } from '../actions/person'
import { Observable } from 'rxjs/Observable'
import { postFetchToObservable } from '../helpers'
import { get } from 'lodash'

export default (action$, store) => action$
    .ofType(FETCH_CREATE_PERSON_START)
    .mergeMap(action => {
      const state = store.getState()
      const base64 = get(state, 'displayImage.base64', '')
      const selectedFaceId = get(state, 'selectedFace.faceId')
      const targetFace = state.detectFaces.find(face => face.faceId === selectedFaceId).faceRectangle
      const allData = get(state, 'userData', {})
      const {name, ...userData} = allData
      console.log(name, userData)
      return postFetchToObservable('/api/person', {name, userData})
        .flatMap(responseJson => {
          const {personId} = responseJson
          console.log(responseJson)
          return Observable.concat(
            Observable.of(fetchCreatePersonSuccess(personId)),
            Observable.of(fetchAddPersonFaceStart({personId, base64, targetFace}))
          )
        })
    })
