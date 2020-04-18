'use strict'

const store = require('../store')
const showHomePage = require('../templates/home-page.handlebars')
const regForm = require('../templates/show-registration.handlebars')
const siForm = require('../templates/show-sign-in.handlebars')

const onDropDownRegistration = function (event) {
  $('#blurb-form-row').empty()
  $('#blurb-form-row').append(showHomePage)
  $('#blurb-form-row').append(regForm)
  $('#sign-up').trigger('reset')
}
const onDropDownSignIn = function (event) {
  $('#blurb-form-row').empty()
  $('#blurb-form-row').append(showHomePage)
  $('#blurb-form-row').append(siForm)
  $('#sign-in').trigger('reset')
}

// Sign-Up User Interface
const signUpSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Registration Successful.')
  $('#su-sect').trigger('reset')
  $('#su-sect').addClass('hide')
}
const signUpFailure = function (error) {
  $('#console-line-one').text('Registration unsuccessful. Confirm matching credentials.')
  $('#sign-up').trigger('reset')
}

// Sign-In User Interface
const signInSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Authentication Successful.')
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
  $('#show-all-mstr').removeClass('hide')
  $('#show-one-mstr').removeClass('hide')
  $('#about-mstr').addClass('hide')
  $('#create-mstr').removeClass('hide')
  $('#update-mstr').removeClass('hide')
  store.user = responseFromAPI.user
}
const signInFailure = function (error) {
  $('#console-line-one').text('Authentication unsuccessful. Please try again.')
  $('#si-sect').trigger('reset')
}

// Change Password User Interface
const onChangePasswordReveal = function (event) {
  $('#delta-pw-form').removeClass('hide')
  $('#delta-pw').addClass('hide')
  $('#so-mstr').addClass('hide')
  $('#show-all-mstr').addClass('hide')
  $('#show-one-mstr').addClass('hide')
  $('#delta-pw-return-mstr').removeClass('hide')
  $('#create-mstr').addClass('hide')
  $('#update-mstr').addClass('hide')
}
const onChangePasswordReturn = function (event) {
  $('#delta-pw-return-mstr').addClass('hide')
  $('#delta-pw-form').addClass('hide')
  $('#delta-pw').removeClass('hide')
  $('#so-mstr').removeClass('hide')
  $('#show-all-mstr').removeClass('hide')
  $('#show-one-mstr').removeClass('hide')
  $('#create-mstr').removeClass('hide')
  $('#update-mstr').removeClass('hide')
}
const changePasswordSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Credential successfully updated.')
  $('#old-pw').val('')
  $('#new-pw').val('')
  $('#delta-pw-form').addClass('hide')
  $('#delta-pw').removeClass('hide')
  $('#so-mstr').removeClass('hide')
  $('#show-all-mstr').removeClass('hide')
  $('#show-one-mstr').removeClass('hide')
}
const changePasswordFailure = function (error) {
  $('#console-line-one').text('Credential update unsuccessful. Please try again.')
  $('#old-pw').val('')
  $('#new-pw').val('')
}

// Sign-Out User Interface
const signOutSuccess = function (responseFromAPI) {
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
  $('#show-all-mstr').addClass('hide')
  $('#show-one-form').addClass('hide')
  $('#about-mstr').removeClass('hide')
  $('#so-mstr').addClass('hide')
  $('#show-all-mstr').addClass('hide')
  $('#show-one-mstr').addClass('hide')
  $('#create-mstr').addClass('hide')
  $('#update-mstr').addClass('hide')
  $('#generate-update').empty()
  $('#char-list-accord').empty()
  $('#char-name-new-gen').text('')
  $('#char-class-new-gen').text('')
  $('#char-level-new-gen').text('')
  $('#char-race-new-gen').text('')
  $('#char-align-new-gen').text('')
  $('#char-deity-new-gen').text('')
  $('#char-gender-new-gen').text('')
  $('#char-xp-new-gen').text('')
  $('#char-campaign-new-gen').text('')
  $('#char-languages-new-gen').text('')
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
  onChangePasswordReturn,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
