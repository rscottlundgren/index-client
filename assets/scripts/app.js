'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
const charEvents = require('./character_engine/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-character').on('submit', charEvents.onCreateCharacter)
  $('#update-character').on('submit', charEvents.onUpdateCharacter)
  $('#delete-character').on('submit', charEvents.onDeleteCharacter)
  $('#show-all').on('submit', charEvents.onShowAll)
  $('#single-character').on('submit', charEvents.onShowOne)
})
