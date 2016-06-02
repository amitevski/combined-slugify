[![Build Status](https://travis-ci.org/amitevski/combined-slugify.svg?branch=master)](https://travis-ci.org/amitevski/combined-slugify)
[![npm version](https://badge.fury.io/js/combined-slugify.svg)](https://badge.fury.io/js/combined-slugify)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

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


Node slug supports multiple configurations options which you can pass into combined-slugify.
see [node-slug](https://github.com/dodo/node-slug) for details

__Example__
```javascript
var slugify = require('combined-slugify', {lower: false});
slugify('Haus & Garten');
// > Haus-and-Garten

slugify('Haus & Garten', {lower: true});
// > haus-and-garten

```


## Changelog

### 2.0.1

* add lower: true as default param

###  2.0.0

* default mode for node-slug is pretty
* added support to specify node-slug options

### 1.x.x

* default mode for node-slug is rfc3986

## Running Tests
```
npm test
```