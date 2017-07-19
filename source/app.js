(function () {
  'use strict'

  if (!window.addEventListener) return // Check for IE9+

  var options = INSTALL_OPTIONS

  window._VUUKLE_LEGACY = {
    orientation: options['comments-location']
  }
}())
