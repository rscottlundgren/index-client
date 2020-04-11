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
  // Click Events ------------------------------------------------------------->

  // Authorization - Events --------------------------------------------------->
  // Register/Sign-Up --------------------------------------------------------->
  $('#blurb-form-row').on('submit', '#sign-up', authEvents.onSignUp)

  // Sign-In ------------------------------------------------------------------>
  $('#blurb-form-row').on('submit', '#sign-in', authEvents.onSignIn)

  // Change Password ---------------------------------------------------------->
  $('#delta-pw-form').on('submit', authEvents.onChangePassword)

  // Sign-Out ----------------------------------------------------------------->
  $('#sign-out').on('click', authEvents.onSignOut)

  // Authorization - UI ------------------------------------------------------->
  // Show Registration/Sign-Up Drop Down Menu --------------------------------->
  $('#reg-dd').on('click', authUI.onDropDownRegistration)

  // Show Sign-In Drop Down Menu ---------------------------------------------->
  $('#si-dd').on('click', authUI.onDropDownSignIn)

  // Show Change Password Inline Form ----------------------------------------->
  $('#delta-pw').on('click', authUI.onChangePasswordReveal)


  $('#delta-pw-return').on('click', authUI.onChangePasswordReturn)

  // Character - Events ------------------------------------------------------->
  // Create New Character ----------------------------------------------------->
  $('#generate-update').on('submit', '#create-character', charEvents.onCreateCharacter)

  // Update Character --------------------------------------------------------->
  $('#generate-update').on('submit', '#update-character', charEvents.onUpdateCharacter)

  // Delete Character --------------------------------------------------------->
  $('#char-list-accord').on('click', '#del-btn',charEvents.onDeleteCharacter)

  // Show All Characters ------------------------------------------------------>
  $('#show-all').on('click', charEvents.onShowAll)

  // Show One Character ------------------------------------------------------->
  $('#show-one-form').on('submit', charEvents.onShowOne)

  // Character - UI ----------------------------------------------------------->
  // Show Create Character Form ----------------------------------------------->
  $('#show-create-form').on('click', charUI.onShowCharacterGenerator)

  // Show Update Character Form ----------------------------------------------->
  $('#show-update-form').on('click', charUI.onShowUpdateCharacter)

  // Show One Character Inline Form ------------------------------------------->
  $('#show-one').on('click', charUI.onShowOneCharacter)

  // Show About Page ---------------------------------------------------------->
  $('#about-lp').on('click', charUI.onShowAboutPage)

  // Show Home Page ----------------------------------------------------------->
  $('#home-lp').on('click', charUI.onShowHomePage)
})
