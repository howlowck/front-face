/* global URL, requestAnimationFrame, alert */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './CameraInput.css'

// getUserMedia polyfill
const getUserMediaPolyfill = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
const getUserMediaPromise = constraints => (new Promise((resolve) => getUserMediaPolyfill.call(navigator, {video: true, audio: false}, resolve)))
const getUserMedia = navigator.mediaDevices ? navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices) : getUserMediaPromise

class CameraInput extends Component {
  onSuccessGetMedia (stream) {
    this.stream = stream
    // console.dir(stream.getVideoTracks()[0].getSettings())
    const { videoEl, canvasEl, height, width } = this
    const videoSourceUrl = URL.createObjectURL(stream)
    videoEl.src = videoSourceUrl
    videoEl.onloadedmetadata = function (meta) {
    }
    const canvasContext = canvasEl.getContext('2d')
    canvasContext.translate(width, 0)
    canvasContext.scale(-1, 1)
    const renderFeedCanvas = () => {
      canvasContext.drawImage(videoEl, 0, 0, width, height)
      requestAnimationFrame(renderFeedCanvas)
    }
    requestAnimationFrame(renderFeedCanvas)
  }

  getBase64 () {
    return this.canvasEl.toDataURL('image/png')
  }

  startStream () {
    if (!this.stream) {
      getUserMedia({
        video: {width: {ideal: this.width}, height: {ideal: this.height}},
        audio: false,
        facingMode: 'user'
      })
        .then(this.onSuccessGetMedia.bind(this))
        .catch(alert)
    }
  }

  endStream () {
    if (this.stream) {
      this.stream.getVideoTracks()[0].stop()
      delete this.stream
    }
  }

  componentWillUnmount () {
    this.endStream()
  }

  render () {
    const { className, width, height, xOffset, enabled } = this.props
    this.height = height
    this.width = width
    this.xOffset = xOffset
    if (!enabled) {
      this.endStream()
    } else {
      this.startStream()
    }

    return (
      <div
        className={classNames(['camera-input-base', className])}>
        <video
          ref={(video) => { this.videoEl = video }}
          width={width}
          height={height}
          autoPlay
        />
        <canvas
          ref={(canvas) => { this.canvasEl = canvas }}
          width={width}
          height={height}
          style={{
            marginLeft: xOffset * -1
          }}
        />
      </div>
    )
  }
}

CameraInput.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  xOffset: PropTypes.number,
  onCaptureClick: PropTypes.func,
  enabled: PropTypes.bool
}

CameraInput.defaultProps = {
  onCaptureClick: (data) => {},
  enabled: false
}

export default CameraInput
