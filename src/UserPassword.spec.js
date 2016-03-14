import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import user from './userStore'
import * as userAction from './userAction'
import UserPassword from './UserPassword'

describe('<UserPassword />', () => {
  it('should render 3 password inputs with the user store values', () => {
    user.newPassword = 'mypassword'
    user.confirmedPassword = 'mypassword'
    user.currentPassword = 'oldpassword'

    var wrapper = shallow(<UserPassword />)

    var newPassword = wrapper.find('[name="newPassword"]')
    expect(newPassword.prop('value')).to.equal('mypassword')

    var confirmedPassword = wrapper.find('[name="confirmedPassword"]')
    expect(confirmedPassword.prop('value')).to.equal('mypassword')

    var currentPassword = wrapper.find('[name="currentPassword"]')
    expect(currentPassword.prop('value')).to.equal('oldpassword')
  })

  it('should notify the user if passwords are matching', () => {
    var wrapper = shallow(<UserPassword />)
    var confirmedPassword = wrapper.find('[name="confirmedPassword"]')
    expect(confirmedPassword.parent().hasClass('has-success')).to.be.true
  })

  it('should notify the user if passwords are not matching', () => {
    //Update the store with unmatching passwords
    user.confirmedPassword = 'notMatchingPassword'

    var wrapper = shallow(<UserPassword />)
    var confirmedPassword = wrapper.find('[name="confirmedPassword"]')
    expect(confirmedPassword.parent().hasClass('has-error')).to.be.true
  })

  it('should call user action: "updateProperty", on change', () => {
    var updatePropertySpy = sinon.spy(userAction, 'updateProperty')
    var wrapper = shallow(<UserPassword />)
    var newPassword = wrapper.find('[name="newPassword"]')

    newPassword.simulate('change', {
      target: {
        name: 'newPassword',
        value: 'superPass666'
      }
    })

    expect(updatePropertySpy).to.have.been.calledWith('newPassword', 'superPass666')
  })
})
