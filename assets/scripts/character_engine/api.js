'use strict'

const config = require('../config')
const store = require('../store')

// Create Character API Ajax Call --------------------------------------------->
const createCharacter = function (userInput) {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: userInput
  })
  console.log(userInput)
}

// Update Character API Ajax Call --------------------------------------------->
const updateCharacter = function (userInput) {
  return $.ajax({
    url: config.apiUrl + '/characters/' + userInput.character.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: userInput
  })
  console.log(userInput)
}

// Delete Character API Ajax Call --------------------------------------------->
const deleteCharacter = function (userInput) {
  return $.ajax({
    url: config.apiUrl + '/characters/' + userInput,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: userInput
  })
  console.log(userInput)
}

// Show All Characters API Ajax Call ------------------------------------------>
const showAll = function () {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  })
}

// Show One Character API Ajax Call ------------------------------------------->
const showOne = function (userInput) {
  return $.ajax({
    url: config.apiUrl + '/characters/' + userInput.character.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: userInput
  })
  console.log(userInput)
}

module.exports = {
  createCharacter,
  updateCharacter,
  deleteCharacter,
  showAll,
  showOne
}
