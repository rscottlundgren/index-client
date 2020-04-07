'use strict'

const config = require('../config')
const store = require('../store')

// Sign-Up API Ajax Call ------------------------------------------------------>
const signUp = function (userInput) {
  console.log(userInput)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: userInput
  })
}

// Sign-In API Ajax Call ------------------------------------------------------>
const signIn = function (userInput) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: userInput
  })
  console.log(userInput)
}

// Change Password API Ajax Call ---------------------------------------------->
const changePassword = function (userInput) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: userInput
  })
}

// Sign Out API Ajax Call ----------------------------------------------------->
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
