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


const mergeSort = (arr) => {
  let n = arr.length;
  if (n > 1) {
    let mid = n/2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
};

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
    while (j < right.length) {
      arr.push(right[j]);
      j++;
    }
  } else {
    while (i < left.lenght) {
      arr.push(left[i]);
      i++;
    }
  }

}

const quickSort = (arr, left, right) => {
  if (left > right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position, - 1);
    quickSort(arr, position + 1, right);
  }
  const partition = (arr, left, right) => {
    let pivot = arr[right];
    let low = left - 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        low++;
        swap(arr, i, low);
      }
    }
    swap(arr, right, low + 1);
    return low + 1;
  }
  const swap = (arr, i, low) => {
    let temp;
    temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
  }
};


let arr1 = [8, 4, 23, 42, 16, 15];
// let result = insertionSort(arr1);
// console.log(result);

// let merged = mergeSort(arr1);
// console.log(merged);

let quicked = quickSort(arr1);
console.log(quicked);


module.exports = {
  insertionSort,
  mergeSort
};
