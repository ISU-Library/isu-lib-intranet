/**
 * @file
 * Google CSE JavaScript setup and invocation code.
 */

// Callback to grab search terms from the URL and feed them to Google.
window.__gcse = {
  callback: function () {
    'use strict';
    // Setting search query term as query string.
    var queryParams = getQueryParams();
    var query = queryParams.keys;
    if (query) {
      var gcse = google.search.cse.element.getElement('google_cse');
      if (gcse) {
        gcse.execute(decodeURIComponent(query.replace(/\+/g, '%20')));
      }
    }
  }
};

function getQueryParams() {
  var results = {};
  var params = window.location.search;
  var queryParamArray = params.substr(1).split('&');
  for (var i = 0; i < queryParamArray.length; i++) {
    var item = queryParamArray[i].split('=');
    results[item[0]] = decodeURIComponent(item[1]);
  }
  return results;
}

// The Google CSE standard code, just changed to pick up the SE
// from Drupal.settings.
(function () {
  'use strict';
  var cx = drupalSettings.googleCSE.cx;
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
}
)();
