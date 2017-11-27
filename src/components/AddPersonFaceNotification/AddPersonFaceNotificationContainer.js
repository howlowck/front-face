import { connect } from 'react-redux'
import { get } from 'lodash'
import AddPersonFaceNotification from './AddPersonFaceNotification'

const mapStateToProps = (state) => ({
  status: get(state, 'status.addPersonFace', 'notstarted')
})

const mapDispatchToProps = (dispatch) => ({

})

const AddPersonFaceNotificationContainer = connect(mapStateToProps, mapDispatchToProps)(AddPersonFaceNotification)

export default AddPersonFaceNotificationContainer
