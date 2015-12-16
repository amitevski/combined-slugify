"use strict";


var slugify = require('./slugify');
var expect = require('expect');

describe('combined-slugify', function() {
  it('should not delete & symbol', function() {
    var text = 'Haus & Garten',
    expected = 'haus-and-garten';
    expect(slugify(text)).toEqual(expected);
  });
  
  it('should not delete arabic letters', function() {
    var text = 'الشتوية, دنو تم كانتا اتفاقية, عملية',
    expected = 'lshtwy-dnw-tm-knt-tfqy-mly';
    expect(slugify(text)).toEqual(expected);
  });
  
  it('should not delete cyrillic letters', function() {
    var text = 'Омйттам эррорибуз ты ючю. Кюм экз тота модюж новум',
    expected = 'omjttam-erroribuz-ty-yuchyu.-kyum-ekz-tota-modyuzh-novum';
    expect(slugify(text)).toEqual(expected);
  });
});