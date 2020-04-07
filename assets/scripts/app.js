'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
const charEvents = require('./character_engine/events.js')
const authUI = require('./auth/ui')
const charUI = require('./character_engine/ui.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#delta-pw-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-character').on('submit', charEvents.onCreateCharacter)
  $('#update-character').on('submit', charEvents.onUpdateCharacter)
  $('#char-list-accord').on('click', '#del-btn',charEvents.onDeleteCharacter)
  $('#show-all').on('click', charEvents.onShowAll)
  $('#show-one-form').on('submit', charEvents.onShowOne)
  $('#reg-dd').on('click', authUI.onDropDownRegistration)
  $('#si-dd').on('click', authUI.onDropDownSignIn)
  $('#delta-pw').on('click', authUI.onChangePasswordReveal)
  $("#show-one").on('click', charUI.onShowOneCharacter)
})
