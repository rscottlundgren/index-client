'use strict'

const store = require('../store')

const onDropDownRegistration = function (event) {
  $('#su-sect').removeClass('hide')
  $('#si-sect').addClass('hide')
  $('#sign-up').trigger('reset')
}
const onDropDownSignIn = function (event) {
  $('#si-sect').removeClass('hide')
  $('#su-sect').addClass('hide')
  $('#sign-in').trigger('reset')
}

// Sign-Up User Interface
const signUpSuccess = function (data) {
  $('#console-line-one').text('Registration Successful.')
  $('#su-sect').trigger('reset')
  $('#su-sect').addClass('hide')
}
const signUpFailure = function (error) {
  $('#console-line-one').text('Registration unsuccessful. Confirm matching credentials.')
  $('#sign-up').trigger('reset')
}

// Sign-In User Interface
const signInSuccess = function (data) {
  $('#console-line-one').text('Authentication Successful. Welcome, Professor.')
  $('#si-sect').addClass('hide')
  $('#si-mstr').addClass('hide')
  $('#reg-mstr').addClass('hide')
  $('#blurb-form-row').addClass('hide')
  $('#bg-mstr').addClass('bg-002')
  $('#bg-mstr').removeClass('bg-000')
  $('#tour').addClass('hide')
  $('#delta-pw-mstr').removeClass('hide')
  $('#so-mstr').removeClass('hide')
  $('#char-mstr').removeClass('hide')
  store.user = data.user
}
const signInFailure = function (error) {
  $('#console-line-one').text('Authentication unsuccessful. Please try again.')
  $('#si-sect').trigger('reset')
}

// Change Password User Interface
const onChangePasswordReveal = function (event) {
  $('#delta-pw-form').removeClass('hide')
  $('#delta-pw').addClass('hide')
}
const changePasswordSuccess = function (data) {
  $('#console-line-one').text('Credential successfully updated.')
  $('#old-pw').val('')
  $('#new-pw').val('')
  $('#delta-pw-form').addClass('hide')
  $('#delta-pw').removeClass('hide')
}
const changePasswordFailure = function (error) {
  $('#console-line-one').text('Credential update unsuccessful. Please try again.')
  $('#old-pw').val('')
  $('#new-pw').val('')
}

// Sign-Out User Interface
const signOutSuccess = function (data) {
  $('#console-line-one').text('--- Connection terminated. ---')
  $('#si-mstr').removeClass('hide')
  $('#reg-mstr').removeClass('hide')
  $('#blurb-form-row').removeClass('hide')
  $('#bg-mstr').removeClass('bg-002')
  $('#bg-mstr').addClass('bg-000')
  $('#tour').removeClass('hide')
  $('#delta-pw-mstr').addClass('hide')
  $('#delta-pw-form').addClass('hide')
  $('#so-mstr').addClass('hide')
  $('#char-mstr').addClass('hide')
  // setTimeout(function () {
  //   window.location.replace("https://www.linkedin.com/in/rscottlundgren/")
  // }, 2250)
}
const signOutFailure = function (error) {
  $('#console-line-one').text('Error on sign out')
}

module.exports = {
  onDropDownRegistration,
  onDropDownSignIn,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onChangePasswordReveal,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
