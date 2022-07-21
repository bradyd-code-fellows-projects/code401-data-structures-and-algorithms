'use strict';

const insertionSort = require('../implementations/arrays/index');

let testArr = [8, 4, 23, 42, 16, 15];

describe('Array sorting methods', () => {

  describe('insertionSort tests', () => {

    test('insertionSort function sorts from least to greatest', () => {
      let result = insertionSort(testArr);
      expect(result).toEqual([4, 8, 15, 16, 23, 42]);
    });

  });

  describe('mergeSort tests', () => {

    test.todo('mergeSort can properly sort an array')

  });
  
});
