'use strict';

module.exports = {
  load: function(url, callback) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
    var img = document.createElement('img');
    img.onerror = function() {
      if (callback) {
        callback(link);
      }
    };
    img.src = url;
  },
  inject: function(styles) {
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<p>foo</p><style>' + styles + '</style>';
    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[1]);
  }
};
