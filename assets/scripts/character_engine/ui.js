'use strict'

const store = require('../store')
const showAllCharactersTemplate = require('../templates/accordion-character.handlebars')
const showOneCharacterTemplate = require('../templates/show-one-character.handlebars')

// Sign-Up User Interface
const createCharacterSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Creation Successful.')
  console.log(responseFromAPI)
  $('#char-name-new-gen').text(responseFromAPI.character.char_name)
  $('#char-class-new-gen').text(responseFromAPI.character.char_class)
  $('#char-level-new-gen').text(responseFromAPI.character.char_level)
  $('#char-race-new-gen').text(responseFromAPI.character.char_race)
  $('#char-align-new-gen').text(responseFromAPI.character.char_alignment)
  $('#char-deity-new-gen').text(responseFromAPI.character.char_deity)
  $('#char-gender-new-gen').text(responseFromAPI.character.char_gender)
  $('#char-xp-new-gen').text(responseFromAPI.character.char_xp)
  $('#char-campaign-new-gen').text(responseFromAPI.character.char_campaign)
  $('#char-languages-new-gen').text(responseFromAPI.character.char_languages)
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
}
const deleteCharacterFailure = function (error) {
  $('#console-line-one').text('Delete unsuccessful.')
  // $('#sign-up').trigger('reset')
  console.log(error)
}

const showAllCharactersSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Show All Successful.')
  console.log(responseFromAPI)
  const characterList = responseFromAPI.characters
  const showCharacterHTML = showAllCharactersTemplate({characters: characterList})
  $('#char-list-accord').empty()
  $('#char-list-accord').append(showCharacterHTML)
}
const showAllCharactersFailure = function (error) {
  $('#console-line-one').text('Show All unsuccessful.')
  // $('#sign-up').trigger('reset')
  console.log(error)
}

const onShowOneCharacter = function (click) {
  $('#show-one-form').removeClass('hide')
  $('#show-one-mstr').addClass('hide')
}
const showOneSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Show One Successful.')
  console.log(responseFromAPI)
  const characterSolo = responseFromAPI.character
  const showCharacterHTML = showOneCharacterTemplate({character: characterSolo})
  $('#char-list-accord').empty()
  $('#char-list-accord').append(showCharacterHTML)
  $('#show-one-form').addClass('hide')
  $('#show-one-mstr').removeClass('hide')
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
  onShowOneCharacter,
  showOneSuccess,
  showOneFailure
}
