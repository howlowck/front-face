import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './AddPersonFaceNotification.css'

const getIcon = (status) => {
  if (status === 'start') {
    return <i className='fa fa-spinner fa-spin fa-3x fa-fw' />
  }
  if (status === 'success') {
    return <i className='fa fa-check fa-3x' />
  }

  return ''
}

const AddPersonFaceNotification = ({ className, status }) => (
  <div className={classNames(['add-person-face-notification', className, status])}>
    {getIcon(status)}
  </div>
)

AddPersonFaceNotification.propTypes = {
  className: PropTypes.string
}

export default AddPersonFaceNotification
