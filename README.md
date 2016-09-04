# stylesheet-inject

[![npm](https://img.shields.io/npm/v/stylesheet-inject.svg?maxAge=2592000)](https://www.npmjs.com/package/stylesheet-inject)

`npm install -S stylesheet-inject`

Dynamically load CSS snippets and stylesheets at browser runtime. Standalone; no dependencies.

*Compatibility only tested in Chrome, but should work in all major browsers.*

## Examples

### Load remote stylesheet

```javascript
var loadCss = require('stylesheet-inject').load;
loadCss('//example.com/path/to/resource.css', function (element) {
  // optional callback with <link/> DOM element provided
});
```

### Inject raw CSS

```javascript
var injectCss = require('stylesheet-inject').inject;
injectCss(
  'p { color: red; }' +
  'a { color: blue; }'
);
```
