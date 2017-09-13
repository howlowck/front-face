import { connect } from 'react-redux'
import PhotoDisplay from './PhotoDisplay'
import { get } from 'lodash'

const mapStateToProps = (state) => ({
  photo: get(state, 'displayImage.base64', null),
  width: get(state, 'displaySize.width'),
  height: get(state, 'displaySize.height'),
  xOffset: get(state, 'displaySize.xOffset')
})

const mapDispatchToProps = (dispatch) => ({

})

const PhotoDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoDisplay)

export default PhotoDisplayContainer
