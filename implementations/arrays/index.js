'use strict';

const insertionSort = (arr) => {
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
};


function mergeSort(arr) {
  let n = arr.length;
  if (n > 1) {
    let mid = n/2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }

  const merge = (left, right, arr) => {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j]
        j++;
      }
      k++;
    }
    if (i = left.length) {
      // set remaining entries in arr to remaining values in right
    } else {
      // set remaining entries in arr to remaining values in left
    }
  }

};

let arr1 = [8, 4, 23, 42, 16, 15];
// let result = insertionSort(arr1);
// console.log(result);

mergeSort(arr1);

module.exports = {
  insertionSort,
  mergeSort
};
