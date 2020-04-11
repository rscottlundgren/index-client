'use strict'

const store = require('../store')
const showAllTemplate = require('../templates/show-all-characters.handlebars')
const showOneTemplate = require('../templates/show-one-character.handlebars')
const showAboutPage = require('../templates/about-page.handlebars')
const showHomePage = require('../templates/home-page.handlebars')
const showCharacterGenerator = require('../templates/create-character.handlebars')
const showUpdateCharacter = require('../templates/update-character.handlebars')

const onShowAboutPage = function (event) {
  $('#reg-dd').addClass('hide')
  $('#si-dd').addClass('hide')
  $('#home-mstr').removeClass('hide')
  $('#about-mstr').addClass('hide')
  $('#bg-mstr').removeClass('bg-000')
  $('#bg-mstr').addClass('bg-001')
  $('#blurb-form-row').empty()
  $('#blurb-form-row').addClass('about-page-text')
  $('#blurb-form-row').append(showAboutPage)
}

const onShowHomePage = function (event) {
  $('#reg-dd').removeClass('hide')
  $('#si-dd').removeClass('hide')
  $('#home-mstr').addClass('hide')
  $('#about-mstr').removeClass('hide')
  $('#bg-mstr').removeClass('bg-001')
  $('#bg-mstr').addClass('bg-000')
  $('#blurb-form-row').empty()
  $('#blurb-form-row').removeClass('about-page-text')
  $('#blurb-form-row').append(showHomePage)
}

const onShowCharacterGenerator = function (event) {
  $('#generate-update').empty()
  $('#generate-update').append(showCharacterGenerator)
  $('#create-mstr').addClass('hide')
  $('#update-mstr').removeClass('hide')
}

const onShowUpdateCharacter = function (event) {
  $('#generate-update').empty()
  $('#generate-update').append(showUpdateCharacter)
  $('#create-mstr').removeClass('hide')
  $('#update-mstr').addClass('hide')
}

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
  $('#create-character').trigger('reset')
}
const createCharacterFailure = function (error) {
  $('#console-line-one').text('Creation unsuccessful.')
  // $('#sign-up').trigger('reset')
}

const updateCharacterSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Update Successful.')
  console.log(responseFromAPI)
  $('#update-character').trigger('reset')
  // $('#sign-up').addClass('hide')
}
const updateCharacterFailure = function (error) {
  $('#console-line-one').text('Update unsuccessful.')
  $('#update-character').trigger('reset')
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
  const showHTML = showAllTemplate({characters: characterList})
  $('#char-list-accord').empty()
  $('#char-list-accord').append(showHTML)
}
const showAllCharactersFailure = function (error) {
  $('#console-line-one').text('Show All unsuccessful.')
  // $('#sign-up').trigger('reset')
  console.log(error)
}

const onShowOneCharacter = function (event) {
  $('#show-one-form').removeClass('hide')
  $('#show-one-mstr').addClass('hide')
}
const showOneSuccess = function (responseFromAPI) {
  $('#console-line-one').text('Show One Successful.')
  console.log(responseFromAPI)
  const characterSolo = responseFromAPI.character
  const showHTML = showOneTemplate({character: characterSolo})
  $('#char-list-accord').empty()
  $('#char-list-accord').append(showHTML)
  $('#show-one-form').addClass('hide')
  $('#show-one-mstr').removeClass('hide')
  $('#show-one-form').trigger('reset')
}
const showOneFailure = function (error) {
  $('#console-line-one').text('Show One unsuccessful.')
  // $('#sign-up').trigger('reset')
  console.log(error)
}

module.exports = {
  onShowAboutPage,
  onShowHomePage,
  onShowUpdateCharacter,
  onShowCharacterGenerator,
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
