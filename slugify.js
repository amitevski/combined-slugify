"use strict";

var nodeslugify = require('slug');
var translitslugify = require('transliteration').slugify;

function slugify(text) {
  var slug1 = nodeslugify(text, {mode: 'rfc3986'}),
    slug2 = translitslugify(text);
    
  if (slug1.length > slug2.length) {
    return slug1;
  }
  return slug2;
}

module.exports = slugify;