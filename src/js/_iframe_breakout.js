+(function () {
  'use strict';

  // if our site is embedded within an iframe,
  // bust the iframe and redirect the browser to load our page directly
  //
  // Requested by RiskSense
  if (top.frames.length != 0) {
    top.location = this.document.location;
  }
})();
