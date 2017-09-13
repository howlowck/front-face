import { connect } from 'react-redux'
import FaceMask from './FaceMask'
import foundFacesSelector from '../../selectors/foundFacesSelector'
import {openUserDataFormUi} from '../../actions/ui'
import {fetchGetPersonStart} from '../../actions/person'
import { get } from 'lodash'

const mapStateToProps = (state) => ({
  masks: foundFacesSelector(state),
  displayWidth: state.displaySize.width,
  displayHeight: state.displaySize.height,
  displayXOffset: state.displaySize.xOffset
})

const mapDispatchToProps = (dispatch) => ({
  onMaskBoxClick: (evt) => {
    const personId = get(evt.currentTarget, 'dataset.personId', null)
    const faceId = get(evt.currentTarget, 'dataset.faceId', '')
    const name = get(evt.currentTarget, 'dataset.personName', null)
    if (evt.currentTarget.querySelector('.not-found')) { // if no Person is foun
      dispatch(openUserDataFormUi({faceId}))
      return
    }
    if (personId && !name) { // if has identified personId but has no name yet
      dispatch(fetchGetPersonStart(personId))
    }
  }
})

const FaceMaskContainer = connect(mapStateToProps, mapDispatchToProps)(FaceMask)

export default FaceMaskContainer
