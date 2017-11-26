import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import HomePage from './HomePage'
import { get } from 'lodash'
import { setPhoto } from '../../actions/photo'
import { fetchDetectStart } from '../../actions/detect'

const mapStateToProps = state => {
  const width = get(state, 'displaySize.width', 0)
  const height = get(state, 'displaySize.height', 0)
  console.log('width, height', width, height)
  return {
    enableCameraInput: !get(state, 'displayImage.base64', null) || width < height
  }
}

const mapDispatchToProps = dispatch => ({
  changePage: () => dispatch(push('/about')),
  onCaptureClick: (base64) => {
    dispatch(setPhoto(base64))
    dispatch(fetchDetectStart(base64))
  }
})

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageContainer
