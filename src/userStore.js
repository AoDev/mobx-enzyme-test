import {observable} from 'mobx'

var user = observable({
  newPassword: '',
  confirmedPassword: '',
  currentPassword: ''
})

export default user
