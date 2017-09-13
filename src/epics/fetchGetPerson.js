import {FETCH_GET_PERSON_START, fetchGetPersonSuccess} from '../actions/person'
import { getFetchToObservable } from '../helpers'

export default action$ =>
  action$.ofType(FETCH_GET_PERSON_START)
    .mergeMap((action) => {
      return getFetchToObservable(`/api/person/${action.data}`)
        .map(fetchGetPersonSuccess)
    })
