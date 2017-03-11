'use strict'

var app = require('../../app/findMinMax.js');

describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(app.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [1,4] for [4, 3, 2, 1]', function () {
        expect(app.findMinMax([4, 3, 2, 1])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(app.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [4, 6] for [4, 6]', function () {
        expect(app.findMinMax([4, 6])).toEqual([4, 6]);
      });

      it('should return [-10, -1] for [-10, -5 , -3, -1 ]', function () {
        expect(app.findMinMax([-10, -5 , -3, -1 ])).toEqual([-10, -1]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(app.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(app.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [1] for [1, 1, 1, 1, 1, 1, 1]', function () {
        expect(app.findMinMax([1, 1, 1, 1, 1, 1, 1])).toEqual([1]);
      });

      it('should return [3] for [3, 3, 3]', function () {
        expect(app.findMinMax([3, 3, 3])).toEqual([3]);
      });

    });


    describe('Return empty array when the list is not an integer', function () {

      it('should return empty array for ["a","n","d","e","l","a"]', function () {
        expect(app.findMinMax(["a","n","d","e","l","a"])).toEqual([]);
      });

    });

 });