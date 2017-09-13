import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {get} from 'lodash'
import './UserDataForm.css'

const BackButton = ({index, onPreviousClick}) => {
  if (index === 0) return null
  return <button style={{width: 35}} className='button is-small prev-button' onClick={onPreviousClick}><i className='fa fa-angle-left fa-fw' /></button>
}

const CloseButton = ({onCloseClick}) => (
  <button style={{width: 35}} className='button is-small close-button' onClick={onCloseClick}><i className='fa fa-times fa-fw' /></button>
)

const SubmitButton = ({onSubmitClick, loading, valid}) => {
  if (loading) {
    return <button type='submit' style={{flex: 1}} disabled className='button is-large is-success submit-button'><i className='fa fa-cog fa-spin fa-fw' />&nbsp;Submitting</button>
  }
  return <button type='submit' style={{flex: 1}} disabled={!valid} className='button is-large is-success submit-button' onClick={onSubmitClick}>Submit</button>
}

function getLabelBar (index, length, name, title, onPreviousClick, onCloseClick) {
  const label = <label className='label field-label' htmlFor={name}>{title}</label>
  return (
    <div className='label-bar'>
      {label}
    </div>
  )
}

function getActionButtons (index, length, onNextClick, onPreviousClick, onSubmitClick, valid, submitButtonLoading) {
  if (index + 1 === length) {
    return (<div className='action-buttons'>
      <SubmitButton onSubmitClick={onSubmitClick} loading={submitButtonLoading} valid={valid} />
    </div>)
  }

  const nextButton = <button style={{flex: 1}} disabled={!valid} className='button is-primary next-button' onClick={onNextClick}>Next &nbsp; <i className='fa fa-angle-right' /></button>

  return (
    <div className='action-buttons'>
      {nextButton}
    </div>
  )
}

function validateValue (value) {
  return value.length > 0
}

class UserDataForm extends Component {
  componentDidUpdate () {
    const {fields, activeIndex, visible} = this.props

    if (!visible || fields.length === 0) { return }

    const {name} = fields[activeIndex]
    const input = this['field-' + name]
    setTimeout(() => {
      input.focus()
    }, 500)
  }

  render () {
    const { className, fields, visible, userData, onFieldInputChange, onNextClick, onPreviousClick, onSubmitClick, activeIndex, onCloseClick, submitButtonLoading } = this.props
    return (
      <div className={classNames('user-data-form-base', className, {visible})} style={{left: activeIndex * -100 + 'vw'}}>
        {fields.map((field, index, arr) => {
          const {title, name} = field
          const value = get(userData, name, '')
          return (
            <div key={field.name} className='field-group'>
              <BackButton index={index} onPreviousClick={onPreviousClick} />
              <CloseButton onCloseClick={onCloseClick} />
              <form className={classNames('field-form', {'active': (activeIndex === index)})}>
                {getLabelBar(index, arr.length, name, title, onPreviousClick, onCloseClick)}
                <input className='input field-input' ref={(input) => { this['field-' + name] = input }} id={name} name={name} type='text' value={value} onChange={onFieldInputChange} />
                {getActionButtons(index, arr.length, onNextClick, onPreviousClick, onSubmitClick, validateValue(value), submitButtonLoading)}
              </form>
            </div>
          )
        })}
      </div>
    )
  }
}

UserDataForm.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.array,
  visible: PropTypes.bool,
  submitButtonLoading: PropTypes.bool,
  userData: PropTypes.object,
  onFieldInputChange: PropTypes.func,
  onNextClick: PropTypes.func,
  onSubmitClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  activeIndex: PropTypes.number
}

export default UserDataForm
