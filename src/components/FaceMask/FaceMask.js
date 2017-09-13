import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {transform} from 'lodash'
import {strToEl} from '../../helpers'
import './FaceMask.css'

function getBoundingBoxElement (mask) {
  return (
    <div className={classNames('bounding-box', mask.found ? 'found' : '', mask.found === false ? 'not-found' : '')}
      style={{ width: mask.faceRectangle.width, height: mask.faceRectangle.height }} />
  )
}
function getSvgElement (mask) {
  const {faceRectangle: rectangle} = mask
  const { faceLandmarks } = mask
  const path1Props = [
    'eyebrowLeftOuter',
    'eyebrowLeftInner',
    'eyeLeftInner',
    'eyeLeftTop',
    'eyeLeftOuter',
    // 'eyeLeftBottom',
    'eyeLeftInner',
    'noseRootLeft',
    'noseLeftAlarTop',
    'noseLeftAlarOutTip',
    'noseTip',
    'upperLipTop',
    'mouthLeft',
    'upperLipBottom',
    'mouthLeft',
    'underLipTop',
    'mouthLeft',
    'underLipBottom'
  ]

  const path2Props = path1Props.map(name => name.replace('Left', 'Right'))

  const landmarksArray = transform(faceLandmarks, (result, value, key) => {
    result.push({name: key, ...value})
  }, [])

  function cx (x) {
    return +(x - rectangle.left).toFixed(1)
  }
  function cy (y) {
    return +(y - rectangle.top).toFixed(1)
  }

  function getLength (str) {
    let pathEl = strToEl(`<svg><path d='${str}' /></svg>`).firstChild
    return pathEl.getTotalLength()
  }

  function getPath (mask, pathProperty) {
    const pathStr = pathProperty.reduce((result, property, index) => {
      const command = index === 0 ? 'M' : 'L'
      const {x, y} = mask.faceLandmarks[property]
      return `${result} ${command} ${cx(x)} ${cy(y)} `
    }, '')

    const length = getLength(pathStr)
    return <path className='mask-path' d={pathStr} fill='none' strokeWidth='2' strokeDasharray={length} strokeDashoffset={length} stroke='green' />
  }

  return (<svg width={rectangle.width} height={rectangle.height}>
    {landmarksArray.map((mark) => {
      return <circle key={mark.name} cx={cx(mark.x)} cy={cy(mark.y)} r='2' strokeWidth='2' fill='green' />
    })}
    {getPath(mask, path1Props)}
    {getPath(mask, path2Props)}
  </svg>)
}

function getNameElement (mask) {
  if (!mask.name) return ''
  return (
    <div className='name'>{mask.name}</div>
  )
}

const FaceMask = ({ className, masks = [], displayWidth, displayHeight, displayXOffset, onMaskBoxClick }) => {
  return (
    <div
      className={classNames(['face-mask-base', className])}
      style={{
        width: displayWidth,
        height: displayHeight,
        marginLeft: -1 * displayXOffset
      }}
    >
      {masks.map(mask => (
        <div key={mask.faceId}
          className='container'
          style={{
            left: mask.faceRectangle.left, top: mask.faceRectangle.top, width: mask.faceRectangle.width, height: mask.faceRectangle.height
          }}
          data-person-id={mask.found ? mask.personId : undefined}
          data-person-name={mask.name ? mask.name : undefined}
          data-face-id={mask.faceId}
          onClick={onMaskBoxClick}
          >
          {getBoundingBoxElement(mask)}
          {getSvgElement(mask)}
          {getNameElement(mask)}
        </div>
    ))}
    </div>
  )
}

FaceMask.propTypes = {
  className: PropTypes.string,
  masks: PropTypes.array.isRequired,
  onMaskBoxClick: PropTypes.func
}

export default FaceMask
