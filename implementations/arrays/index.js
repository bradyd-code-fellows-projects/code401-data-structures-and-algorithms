'use strict';

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while ((j > -1) && (temp < arr[j])) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

module.exports = insertionSort;

let arr1 = [8, 4, 23, 42, 16, 15];
let result = insertionSort(arr1);
console.log(result);
