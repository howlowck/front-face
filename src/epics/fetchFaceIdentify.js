import {FETCH_IDENTIFY_START, fetchIdentifySuccess} from '../actions/identify'
// import { Observable } from 'rxjs/Observable'
import { take } from 'lodash'
import { postFetchToObservable } from '../helpers'

export default action$ =>
  action$.ofType(FETCH_IDENTIFY_START)
    .mergeMap((action) => {
      const faceIds = take(action.data.faceIds, 10) // Identify Face Api only takes 10 faceIds
      return postFetchToObservable('/api/identify', {faceIds})
        .map(fetchIdentifySuccess)
    })
