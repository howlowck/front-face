import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import FileInputButton from '../FileInputButton'
import './CaptureButtons.css'

class CaptureButtons extends Component {
  getCaptureIcon () {
    const {isCaptureButtonLoading} = this.props
    if (isCaptureButtonLoading) {
      return <i className='fa fa-cog fa-3x fa-spin fa-fw' />
    }
    return <i className='fa fa-camera' />
  }

  render () {
    const { className, isCaptureButtonLoading, isCaptureButtonVisible, onCapture, setPhoto, setDisplaySize } = this.props

    return (
      <div className={classNames(['capture-buttons', className])}>
        <div className='spacer' />
        <button disabled={isCaptureButtonLoading}
          className={'capture-button button is-primary ' + (isCaptureButtonVisible ? '' : 'hidden')}
          onClick={onCapture}>
          {this.getCaptureIcon()}
        </button>
        <div className='middle-spacer' />
        <FileInputButton setPhoto={setPhoto} setDisplaySize={setDisplaySize} className='file-button' />
        <div className='spacer' />
      </div>
    )
  }
}

CaptureButtons.propTypes = {
  className: PropTypes.string,
  isCaptureButtonLoading: PropTypes.bool,
  isCaptureButtonVisible: PropTypes.bool,
  onCapture: PropTypes.func,
  setPhoto: PropTypes.func,
  setDisplaySize: PropTypes.func
}

export default CaptureButtons
