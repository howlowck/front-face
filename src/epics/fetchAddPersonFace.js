import {FETCH_ADD_PERSON_FACE_START, fetchAddPersonFaceSuccess} from '../actions/person'
import {clearUserData} from '../actions/userData'
import {fetchTrainStart} from '../actions/train'
import {closeUserDataFormUi} from '../actions/ui'
import {Observable} from 'rxjs/Observable'
import {postFetchToObservable} from '../helpers'

export default action$ =>
  action$.ofType(FETCH_ADD_PERSON_FACE_START)
    .mergeMap((action) => {
      console.log('data in add person face', action.data)
      return postFetchToObservable('/api/personFace', action.data) // data {personId, base64, targetFace: {x, y, width, height}}
        .flatMap(() => Observable.of(
            Observable.of(fetchAddPersonFaceSuccess()),
            Observable.of(closeUserDataFormUi()),
            Observable.of(clearUserData()),
            Observable.of(fetchTrainStart())
        ).concatAll())
    })
