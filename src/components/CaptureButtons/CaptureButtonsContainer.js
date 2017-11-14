import { connect } from 'react-redux'
import CaptureButtons from './CaptureButtons'
import { get } from 'lodash'
import { setPhoto } from '../../actions/photo'
import { setDisplaySize } from '../../actions/size'
import { fetchDetectStart } from '../../actions/detect'

const mapStateToProps = (state) => ({
  isCaptureButtonVisible: get(state, 'status.identify') !== 'success',
  isCaptureButtonLoading: get(state, 'status.detect') === 'start' || get(state, 'status.identify') === 'start'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCapture: ownProps.onCapture,
  setPhoto: (base64) => {
    dispatch(setPhoto(base64))
    dispatch(fetchDetectStart(base64))
  },
  setDisplaySize: (sizeData) => dispatch(setDisplaySize(sizeData))
})

const CaptureButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(CaptureButtons)

export default CaptureButtonsContainer
