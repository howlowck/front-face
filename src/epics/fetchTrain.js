import {FETCH_TRAIN_START, fetchTrainSuccess, fetchTrainStatusStart} from '../actions/train'
import { postFetchToObservable } from '../helpers'
import { Observable } from 'rxjs/Observable'

export default action$ =>
  action$.ofType(FETCH_TRAIN_START)
    .mergeMap((action) => {
      console.log('action in fetchTrain', action)
      return postFetchToObservable('/api/train').flatMap(() => {
        return Observable.concat(
          Observable.of(fetchTrainSuccess()),
          Observable.of(fetchTrainStatusStart()).delay(500)
        )
      })
    })
