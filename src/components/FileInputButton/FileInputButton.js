/* global FileReader, Image */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './FileInputButton.css'

function getBase64FromFile (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      const img = new Image()

      img.onload = function () {
        const {width: picWidth, height: picHeight} = this
        const aspectRatio = picWidth / picHeight
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        canvas.width = windowWidth
        canvas.height = windowHeight
        ctx.drawImage(this, 0, 0, windowWidth, windowWidth / aspectRatio)
        resolve({base64: canvas.toDataURL(), aspectRatio, windowWidth, windowHeight, xOffset: 0})
      }

      img.src = reader.result
    }
    reader.onerror = function (error) {
      reject(error)
    }
  })
}

class FileInputButton extends Component {
  onFileChange (evt) {
    const {setPhoto, setDisplaySize} = this.props
    const file = evt.target.files[0]
    // let imgBase64
    getBase64FromFile(file)
      .then((data) => {
        const {base64, ...sizeData} = data
        setDisplaySize(sizeData)
        return base64
      })
      .then((imgBase64) => {
        setPhoto(imgBase64)
      })
  }

  render () {
    const { className } = this.props

    return (
      <div className={classNames(['file-input-button', className])}>
        <input ref={fileInput => { this.fileInput = fileInput }} onChange={this.onFileChange.bind(this)} type='file' name='photo-file' id='capture-file' className='input-file button' />
        <label htmlFor='capture-file' className='button'><i className='fa fa-folder-open' aria-hidden='true' /></label>
      </div>
    )
  }
}

FileInputButton.propTypes = {
  className: PropTypes.string,
  setPhoto: PropTypes.func,
  setDisplaySize: PropTypes.func
}

export default FileInputButton
