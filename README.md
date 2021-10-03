[![Lint and Test](https://github.com/Pondorasti/remark-replace-img-ext/actions/workflows/main.yaml/badge.svg?branch=main)](https://github.com/Pondorasti/remark-replace-img-ext/actions/workflows/main.yaml)
[![NPM](https://img.shields.io/npm/v/@pondorasti/remark-replace-img-ext.svg)](https://www.npmjs.com/package/@pondorasti/remark-replace-img-ext)
[![NPM Downloads](https://img.shields.io/npm/dm/@pondorasti/remark-replace-img-ext)](https://www.npmjs.com/package/@pondorasti/remark-replace-img-ext)
[![Size](https://img.shields.io/bundlephobia/minzip/@pondorasti/remark-replace-img-ext.svg)](https://bundlephobia.com/result?p=@pondorasti/remark-replace-img-ext)

# remark-replace-img-ext

[**remark**](https://github.com/remarkjs/remark) plugin to prefix relative image paths with an absolute URL.

## Installation

```
npm install @pondorasti/remark-replace-img-ext
```

## Usage

### Source
```js
const html = require("remark-html")
const remark = require("remark")
const imgLinks = require("@pondorasti/remark-replace-img-ext")

remark()
  .use(imgLinks, { absolutePath: "https://cdn.domain.com/" })
  .use(html)
  .process("![Screenshot](images/screenshot.png)", (err, file) => {
    if (err) throw err
    console.log(String(file))
  })
```

### Yields
```html
<p><img src="https://cdn.domain.com/images/screenshot.png" alt="Screenshot"></p>
```

## API
### `remark.use(imgLinks[, options])`
* `options.absolutePath` (**required**) - the absolute path that will be prepended to the begging of image links.

## Contributions
If you are interested in contributing to this project, please open an issue with a description of what you would like to add.

## License
[MIT](LICENSE) © [Alexandru Turcanu](https://github.com/Pondorasti)
