'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const charEngAPI = require('./api')
const charEngUI = require('./ui')

// Sign-Up Event
const onCreateCharacter = function (event) {
  event.preventDefault()
  const userInput = getFormFields(event.target)
  console.log(userInput)
  charEngAPI.createCharacter(userInput)
    .then(charEngUI.createCharacterSuccess)
    .catch(charEngUI.createCharacterFailure)
}

// Sign-Up Event
const onUpdateCharacter = function (event) {
  event.preventDefault()
  const userInput = getFormFields(event.target)
  console.log(userInput)
  charEngAPI.updateCharacter(userInput)
    .then(charEngUI.updateCharacterSuccess)
    .catch(charEngUI.updateCharacterFailure)
}

const onDeleteCharacter = function (event) {
  event.preventDefault()
  const userInput = $(event.target).closest('.card').data('id')
  console.log(userInput)
  charEngAPI.deleteCharacter(userInput)
    .then(() => onShowAll(event))
    .catch(charEngUI.deleteCharacterFailure)
}

const onShowAll = function (event) {
  event.preventDefault()
  charEngAPI.showAll()
    .then(charEngUI.showAllCharactersSuccess)
    .catch(charEngUI.showAllCharactersFailure)
}

const onShowOne = function (event) {
  event.preventDefault()
  const userInput = getFormFields(event.target)
  console.log(userInput)
  charEngAPI.showOne(userInput)
    .then(charEngUI.showOneSuccess)
    .catch(charEngUI.showOneFailure)
}

module.exports = {
  onCreateCharacter,
  onUpdateCharacter,
  onDeleteCharacter,
  onShowAll,
  onShowOne
}
