const createLinkElement = (url) => {
  const $link = document.createElement('link');
  $link.type = 'text/css';
  $link.rel = 'stylesheet';
  $link.href = url;
  return $link;
};

export default function (url, callback) {
  const $link = createLinkElement(url);
  const $head = document.getElementsByTagName('head')[0];
  $head.appendChild($link);
  const $img = document.createElement('img');
  $img.onerror = (e) => {
    if (callback) {
      callback(e, $link);
    }
  };
  $img.src = url;
}
