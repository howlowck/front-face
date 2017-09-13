import { FETCH_DETECT_START, fetchDetectSuccess } from '../actions/detect'
import { fetchIdentifyStart } from '../actions/identify'
import { Observable } from 'rxjs/Observable'
import { postFetchToObservable } from '../helpers'

export default action$ =>
  action$
    .ofType(FETCH_DETECT_START)
    .mergeMap(action => postFetchToObservable('/api/detect', {base64: action.data})
        .flatMap(detectData => {
          console.log(detectData)
          const faceIds = detectData.map(face => face.faceId)
          return Observable.concat(
            Observable.of(fetchDetectSuccess(detectData)),
            Observable.of(fetchIdentifyStart({faceIds}))
          )
        })
      )
