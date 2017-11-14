import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import HomePage from './HomePage'
import { get } from 'lodash'
import { setPhoto } from '../../actions/photo'
import { fetchDetectStart } from '../../actions/detect'

const mapStateToProps = state => ({
  enableCameraInput: !get(state, 'displayImage.base64', null)
})

const mapDispatchToProps = dispatch => ({
  changePage: () => dispatch(push('/about')),
  onCaptureClick: (base64) => {
    dispatch(setPhoto(base64))
    dispatch(fetchDetectStart(base64))
  }
})

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageContainer
