'use strict'

const addEventListeners = function () {
  $('a[data-link]').on('click', changeLayout)
  $('.resume').on('click', showResume)
  $('#download-resume').on('submit', downloadResume)
  setTimeout(() => {
    $('.emphasis-1').addClass('emphasized')
  }, 500)
  setTimeout(() => {
    $('.emphasis-2').addClass('emphasized')
  }, 900)
  setTimeout(() => {
    $('.emphasis-3').addClass('emphasized')
  }, 1500)
}

const changeLayout = function (event) {
  const view = event.target.dataset.link
  // console.log(`view is`, view)
  const currentView = $('.active')
  // console.log(`current view is`, currentView)

  if (view !== currentView[0].id) {
    currentView.addClass('clear').removeClass('active')
    setTimeout(() => {
      currentView.addClass('hidden')
      $(`#${view}`).removeClass('hidden')
    }, 1001)
    setTimeout(() => {
      $(`#${view}`).addClass('active').removeClass('clear')
    }, 1050)
  }
}

const showResume = function () {
  $('#resumeModal').modal('show')
}

const downloadResume = function () {

}

// const downloadResume = function () {
//   const downloading = browser.downloads.download({
//     url: './public/images/NateSuriResume.pdf',
//     filename: 'my-image-again.png',
//     conflictAction: 'uniquify'
//   })
// }

module.exports = {
  addEventListeners
}
