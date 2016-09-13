export default {
  load: (url, callback) => {
    const $link = document.createElement('link');
    $link.type = 'text/css';
    $link.rel = 'stylesheet';
    $link.href = url;
    const $head = document.getElementsByTagName('head')[0];
    $head.appendChild($link);
    var $img = document.createElement('img');
    $img.onerror = (e) => {
      if (callback) {
        callback(e, $link);
      }
    };
    $img.src = url;
  },
  inject: (styles) => {
    var $div = document.createElement('div');
    $div.innerHTML = `<p>foo</p><style>${styles}</style>`;
    const $head = document.getElementsByTagName('head')[0];
    $head.appendChild($div.childNodes[1]);
  }
};
