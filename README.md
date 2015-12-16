# Combined Slugify

This module creates a slug by utilizing 2 other libraries.
  - [node-slug](https://github.com/dodo/node-slug) for transforming utf8 symbols
  - [node-transliteration](https://github.com/andyhu/node-transliteration) for transliterating special language characters like arabic, chinese, cyrillic...

## Install

```
npm install combined-slugify
```

## Usage

__Example__
```javascript
var slugify = require('combined-slugify');
slugify('i ♥ unicode');
// > i-love-unicode

slugify('你好，世界');
// > ni-hao-shi-jie
```


## Running Tests
```
npm test
```