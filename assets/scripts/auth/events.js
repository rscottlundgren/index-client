'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Sign-Up Event -------------------------------------------------------------->
const onSignUp = function (event) {
  event.preventDefault()
  const userInput = getFormFields(event.target)
  console.log(userInput)
  api.signUp(userInput)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// Sign-In Event -------------------------------------------------------------->
const onSignIn = function (event) {
  event.preventDefault()
  const userInput = getFormFields(event.target)
  api.signIn(userInput)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// Change Password Event ------------------------------------------------------>
const onChangePassword = function (event) {
  event.preventDefault()
  const userInput = getFormFields(event.target)
  api.changePassword(userInput)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// Sign-Out Event ------------------------------------------------------------->
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
