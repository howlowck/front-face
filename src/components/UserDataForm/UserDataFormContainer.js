import { connect } from 'react-redux'
import UserDataForm from './UserDataForm'
import {get} from 'lodash'
import {setUserData, advanceUserDataField, previousUserDataField, clearUserData} from '../../actions/userData'
import {fetchCreatePersonStart} from '../../actions/person'
import {closeUserDataFormUi} from '../../actions/ui'

const mapStateToProps = (state) => ({
  fields: get(state, 'fields', []),
  visible: get(state, 'views.userDataForm.open', false),
  userData: get(state, 'userData', {}),
  activeIndex: get(state, 'views.currentUserFieldIndex', 0),
  submitButtonLoading: get(state, 'status.createPerson') === 'start' || get(state, 'status.addPersonFace') === 'start'
})

const mapDispatchToProps = (dispatch) => ({
  onFieldInputChange: (evt) => {
    const el = evt.currentTarget
    const value = el.value
    const name = el.name
    dispatch(setUserData({name, value}))
  },

  onSubmitClick: (evt) => {
    evt.preventDefault()
    dispatch(fetchCreatePersonStart())
  },

  onNextClick: (evt) => {
    evt.preventDefault()
    dispatch(advanceUserDataField())
  },

  onPreviousClick: (evt) => {
    evt.preventDefault()
    dispatch(previousUserDataField())
  },

  onCloseClick: (evt) => {
    evt.preventDefault()
    dispatch(closeUserDataFormUi())
    dispatch(clearUserData())
  }

})

const UserDataFormContainer = connect(mapStateToProps, mapDispatchToProps)(UserDataForm)

export default UserDataFormContainer
