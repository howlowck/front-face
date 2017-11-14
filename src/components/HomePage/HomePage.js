import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './HomePage.css'
import CameraInput from '../CameraInput'
import PhotoDisplay from '../PhotoDisplay'
import FaceMask from '../FaceMask'
import UserDataForm from '../UserDataForm'
import CaptureButtons from '../CaptureButtons'

class HomePage extends Component {
  capture () {
    const image64 = this.webcam.getBase64()
    this.props.onCaptureClick(image64)
  }

  render () {
    const {className, enableCameraInput} = this.props
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
        <CaptureButtons onCapture={this.capture.bind(this)} />
        <UserDataForm />
      </div>
    )
  }
}

HomePage.propTypes = {
  className: PropTypes.string,
  changePage: PropTypes.func,
  onCaptureClick: PropTypes.func,
  enableCameraInput: PropTypes.bool
}

export default HomePage
