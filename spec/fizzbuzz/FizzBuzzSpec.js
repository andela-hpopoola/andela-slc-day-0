'use strict'

var app = require('../../app/fizzbuzz.js');


  describe("Fizz Buzz tests ", function() {

    describe("Tests for proper arithmetic functionality", function() {

      it("should return `Fizz` for number divisible by 3", function() {
        expect(app.fizzBuzz(3)).toBe('Fizz');
      });

      it("should return `Buzz` for number divisible by 5", function() {
        expect(app.fizzBuzz(5)).toBe('Buzz');
      });

      it("should return `FizzBuzz` for 15", function() {
        expect(app.fizzBuzz(15)).toBe('FizzBuzz');
      });

      it("should return `FizzBuzz` for 60", function() {
        expect(app.fizzBuzz(60)).toBe('FizzBuzz');
      });

      it("should return `FizzBuzz` for 90", function() {
        expect(app.fizzBuzz(90)).toBe('FizzBuzz');
      });

      it("should return `Fizz` for 63", function() {
        expect(app.fizzBuzz(63)).toBe('Fizz');
      });

      it("should return 7 since its indivisible by 3 and 5", function() {
        expect(app.fizzBuzz(7)).toBe(7);
      });

      it("should return 101 since its indivisible by 3 and 5", function() {
        expect(app.fizzBuzz(101)).toBe(101);
      });

      it("should return 11 since its indivisible by 3 and 5", function() {
        expect(app.fizzBuzz(11)).toBe(11);
      });

    });

    describe("Return an empty string if argument is not a number", function() {

      it("should return `` for `andela`", function() {
        expect(app.fizzBuzz('andela')).toBe('');
      });

    });

  });