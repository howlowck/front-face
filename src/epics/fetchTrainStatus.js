import { FETCH_TRAIN_STATUS_START, fetchTrainStatusSuccess } from '../actions/train'
import { getFetchToObservable } from '../helpers'
// import { Observable } from 'rxjs/Observable'

export default action$ =>
  action$.ofType(FETCH_TRAIN_STATUS_START)
    .mergeMap((action) => {
      console.log('action in status', action)
      return getFetchToObservable('/api/train')
        .map((statusObj) => fetchTrainStatusSuccess(statusObj))
    })
