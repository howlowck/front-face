import {FETCH_FIELD_START, fetchFieldSuccess} from '../actions/userData'
import { getFetchToObservable } from '../helpers'

export default action$ =>
  action$.ofType(FETCH_FIELD_START)
    .mergeMap((action) => {
      return getFetchToObservable('/api/fields')
        .map(fetchFieldSuccess)
    })
