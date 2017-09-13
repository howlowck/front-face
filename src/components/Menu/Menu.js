import React, { Component, PropTypes } from 'react'
import { classNames } from 'support/helpers'
import styles from './Menu.scss'

class Menu extends Component {
  render () {
    const { className } = this.props

    return (
      <div className={classNames([styles.base, className])}>
        Change me (Menu)
      </div>
    )
  }
}

Menu.propTypes = {
  className: PropTypes.string
}

export default Menu
