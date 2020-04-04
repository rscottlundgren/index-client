'use strict'

const config = require('../config')
const store = require('../store')

// Sign-Up API Ajax Call
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

const deleteCharacter = function (userInput) {
  return $.ajax({
    url: config.apiUrl + '/characters/' + userInput.character.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: userInput
  })
  console.log(userInput)
}

const showAll = function () {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  })
}

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
