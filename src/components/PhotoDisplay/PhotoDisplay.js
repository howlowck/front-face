import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './PhotoDisplay.css'

const PhotoDisplay = ({ className, photo, width, height, xOffset }) => (
  <img
    alt=''
    src={photo}
    className={classNames(['photo-display-base', className])}
    width={width}
    height={height}
    style={{
      top: 0,
      left: -1 * xOffset
    }}
  />
)

PhotoDisplay.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  xOffset: PropTypes.number,
  photo: PropTypes.string
}

export default PhotoDisplay
