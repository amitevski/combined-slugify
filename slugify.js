"use strict";

var nodeslugify = require('slug');
var translitslugify = require('transliteration').slugify;

function slugify(text, options) {
  if (!options) {
    options = {mode: 'pretty', lower: true};
  }
  var slug1 = nodeslugify(text, options),
    slug2 = translitslugify(text);
    
  if (slug1.length > slug2.length) {
    return slug1;
  }
  return slug2;
}

module.exports = slugify;