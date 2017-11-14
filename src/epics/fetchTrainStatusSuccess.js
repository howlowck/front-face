import {FETCH_TRAIN_STATUS_SUCCESS, fetchTrainStatusStart} from '../actions/train'
import { Observable } from 'rxjs/Observable'
import { get } from 'lodash'

export default (action$, store) =>
  action$.ofType(FETCH_TRAIN_STATUS_SUCCESS)
    .filter(() => get(store.getState(), 'trainingStatus.status', '') !== 'succeeded')
    .map((action) => Observable.of(fetchTrainStatusStart()).delay(500))
