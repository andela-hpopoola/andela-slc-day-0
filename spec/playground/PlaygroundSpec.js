// testing code goes here

'use strict'

var app = require('../../app/playground.js');

describe ("Addition", function(){
  it("should add 2 numbers", function(){
    var value = app.AddNumbers(5,6);
    expect(value).toBe(11);
  })
});

describe ("Subtration", function(){
  it("should subtract 2 numbers", function(){
    var value = app.SubtractNumbers(7,2);
    expect(value).toBe(5);
  })
});