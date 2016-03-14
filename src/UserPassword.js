import React, { Component } from 'react'
import {observer} from 'mobx-react'
import classNames from 'classnames'
import user from './userStore'
import {updateProperty} from './userAction'

/**
 * This component is a simplified version of a more complex form
 * What you have here are 3 fields
 * - new password
 * - confirm new password
 * _ current password
 *
 * This component import the store and actions directly
 * instead of getting its data through props.
 *
 * In this case, during the tests with enzyme, mobx-react
 * will warn about re-render before mount.
 */
@observer
export default class UserPassword extends Component {

  onFieldChange (event) {
    updateProperty(event.target.name, event.target.value)
  }

  render () {
    const repeatedPassClasses = {
      'form-group': true,
      'has-error': user.newPassword !== user.confirmedPassword,
      'has-success': user.newPassword === user.confirmedPassword
    }

    return (
      <div>

        <div className="form-group">
          <label htmlFor="new-password">New password:</label>
          <input type="password" className="form-control" id="new-password"
              name="newPassword"
              value={user.newPassword}
              onChange={this.onFieldChange}/>
        </div>

        <div className={classNames(repeatedPassClasses)}>
          <label htmlFor="confirm-password">Confirm password:</label>
          <input type="password" className="form-control" id="confirm-password"
              name="confirmedPassword"
              value={user.confirmedPassword}
              onChange={this.onFieldChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="current-password">Current password:</label>
          <input type="password" className="form-control" id="current-password"
              name="currentPassword"
              value={user.currentPassword}
              onChange={this.onFieldChange}/>
        </div>

      </div>
    )
  }
}

UserPassword.displayName = 'UserPassword'
