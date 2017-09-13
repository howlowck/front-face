import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './HomePage.css'
import CameraInput from '../CameraInput'
import PhotoDisplay from '../PhotoDisplay'
import FaceMask from '../FaceMask'
import UserDataForm from '../UserDataForm'

class HomePage extends Component {
  capture () {
    const image64 = this.webcam.getBase64()
    this.props.onCaptureClick(image64)
  }
  getCaptureIcon () {
    const {isCaptureButtonLoading} = this.props
    if (isCaptureButtonLoading) {
      return <i className='fa fa-cog fa-3x fa-spin fa-fw' />
    }
    return <i className='fa fa-camera' />
  }
  render () {
    const {className, enableCameraInput, isCaptureButtonLoading, isCaptureButtonVisible} = this.props
    return (
      <div className={classNames(['home-page-base', className])}>
        {/* <button onClick={changePage}>Go to about page via redux</button> */}
        <FaceMask />
        <PhotoDisplay />
        <CameraInput enabled={enableCameraInput}
          ref={(webcamEl) => { if (!webcamEl) return; this.webcam = webcamEl.getWrappedInstance() }}
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <div className='button-group'>
          <button disabled={isCaptureButtonLoading}
            className={'capture-button button is-primary ' + (isCaptureButtonVisible ? '' : 'hidden')}
            onClick={this.capture.bind(this)}>
            {this.getCaptureIcon()}
          </button>
        </div>
        <UserDataForm />
      </div>
    )
  }
}

HomePage.propTypes = {
  className: PropTypes.string,
  changePage: PropTypes.func,
  onCaptureClick: PropTypes.func,
  enableCameraInput: PropTypes.bool,
  isCaptureButtonVisible: PropTypes.bool,
  isCaptureButtonLoading: PropTypes.bool
}

export default HomePage
