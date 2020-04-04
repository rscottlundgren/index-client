'use strict'

const store = require('../store')

// Sign-Up User Interface
const createCharacterSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Creation Successful.')
  console.log(responseFromAPI)
  // $('#sign-up').trigger('reset')
  // $('#sign-up').addClass('hide')
}
const createCharacterFailure = function (error) {
  $('#console-line-one').text('Creation unsuccessful.')
  // $('#sign-up').trigger('reset')
}

const updateCharacterSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Update Successful.')
  console.log(responseFromAPI)
  // $('#sign-up').trigger('reset')
  // $('#sign-up').addClass('hide')
}
const updateCharacterFailure = function (error) {
  $('#console-line-one').text('Update unsuccessful.')
  // $('#sign-up').trigger('reset')
  console.log(error)
}

const deleteCharacterSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Delete Successful.')
  console.log(responseFromAPI)
  // $('#sign-up').trigger('reset')
  // $('#sign-up').addClass('hide')
}
const deleteCharacterFailure = function (error) {
  $('#console-line-one').text('Delete unsuccessful.')
  // $('#sign-up').trigger('reset')
  console.log(error)
}

const showAllCharactersSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Show All Successful.')
  console.log(responseFromAPI)
  // $('#sign-up').trigger('reset')
  // $('#sign-up').addClass('hide')
}
const showAllCharactersFailure = function (error) {
  $('#console-line-one').text('Show All unsuccessful.')
  // $('#sign-up').trigger('reset')
  console.log(error)
}

const showOneSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Show One Successful.')
  console.log(responseFromAPI)
  // $('#sign-up').trigger('reset')
  // $('#sign-up').addClass('hide')
}
const showOneFailure = function (error) {
  $('#console-line-one').text('Show One unsuccessful.')
  // $('#sign-up').trigger('reset')
  console.log(error)
}

module.exports = {
  createCharacterSuccess,
  createCharacterFailure,
  updateCharacterSuccess,
  updateCharacterFailure,
  deleteCharacterSuccess,
  deleteCharacterFailure,
  showAllCharactersSuccess,
  showAllCharactersFailure,
  showOneSuccess,
  showOneFailure
}
