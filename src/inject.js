export default function (styles) {
  const $div = document.createElement('div');
  $div.innerHTML = `<p>foo</p><style>${styles}</style>`;
  const $head = document.getElementsByTagName('head')[0];
  $head.appendChild($div.childNodes[1]);
}
