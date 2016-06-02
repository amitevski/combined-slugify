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


Node slug supports multiple configurations options which you can pass into combined-slugify
__Example__
```javascript
var slugify = require('combined-slugify');
slugify('Haus & Garten');
// > Haus-and-Garten

slugify('Haus & Garten', {lower: true});
// > haus-and-garten

```


## Changelog

###  2.0.0

* default mode for node-slug is pretty
* added support to specify node-slug options see [node-slug](https://github.com/dodo/node-slug) for details

### 1.x.x

* default mode for node-slug is rfc3986

## Running Tests
```
npm test
```