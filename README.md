# stylesheet-inject

[![npm](https://img.shields.io/npm/v/stylesheet-inject.svg?maxAge=2592000)](https://www.npmjs.com/package/stylesheet-inject)

Dynamically load CSS snippets and stylesheets at browser runtime. **Standalone utility (no dependencies)**

## Install

`npm install -S stylesheet-inject` or use the CDN version.

## Examples

### Load remote stylesheet

#### NPM

```javascript
var loadCss = require('stylesheet-inject').load;
loadCss('//example.com/path/to/resource.css', function (error, $link) {
  // error callback with <link/> DOM element provided
});
```

#### CDN

```html
<script src="//unpkg.com/stylesheet-inject/dist/stylesheet-inject.min.js"></script>
<script>
var loadCss = stylesheetInject.load;
loadCss('//example.com/path/to/resource.css', function (error, $link) {
  // error callback with <link/> DOM element provided
});
</script>
```

### Inject raw CSS

#### NPM

```javascript
var injectCss = require('stylesheet-inject').inject;
injectCss(
  'p { color: red; }' +
  'a { color: blue; }'
);
```

#### CDN

```html
<script src="//unpkg.com/stylesheet-inject/dist/stylesheet-inject.min.js"></script>
<script>
var loadCss = stylesheetInject.inject;
injectCss(
  'p { color: red; }' +
  'a { color: blue; }'
);
</script>
```
