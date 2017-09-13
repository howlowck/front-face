import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import styles from './AddFacePage.css'

class AddFacePage extends Component {
  render () {
    const { className } = this.props

    return (
      <div className={classNames([styles.base, className])}>
        Change me (AddFacePage)
      </div>
    )
  }
}

AddFacePage.propTypes = {
  className: PropTypes.string
}

export default AddFacePage
