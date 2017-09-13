import { connect } from 'react-redux'
import CameraInput from './CameraInput'
import { get } from 'lodash'

const mapStateToProps = (state, ownProps) => ({
  width: get(state, 'displaySize.width'),
  height: get(state, 'displaySize.height'),
  xOffset: get(state, 'displaySize.xOffset')
})

const mapDispatchToProps = (dispatch) => ({

})

const CameraInputContainer = connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(CameraInput)

export default CameraInputContainer
