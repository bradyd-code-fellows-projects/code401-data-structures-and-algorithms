'use strict';

const { LinkedList, Node } = require('../linked-list/LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  /**
   *   Takes in a string and returns a hash as integer
   * @param {String} key 
   * @returns 
   */
  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;

    return initialHash % 1024;
  }

  set(key, value) {
    // hash is the position inside the table where we will "set" the key value pair
    let position = this.hash(key);
    let data = { [key]: value };

    // we check if there is a bucket at the specified position
    // if bucket exists, add our data
    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      // if bucket doesn't exist, create one
      let bucket = new LinkedList();

      // add data to the bucket
      bucket.add(data);

      // add bucket to its position
      this.buckets[position] = bucket;
    }
  }

  // returns ONLY the value stored
  get(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let bucket = this.buckets[position];

      // I'll assume no collisions, I'll leave the link list traversal to you (as a stretch goal);
      let value = bucket.head.value[key];
      return value;
    }
  }

  contains(key) {
    let position = this.hash(key);
    let ternary = ((this.buckets[position]) ? true : false)
    // console.log(`Contains key: "${key}"? --> ${ternary}`);
    return ternary;
  }

  getKeys() {
    let keys = Object.keys(this.buckets);
    return keys;
  }

}

const repeatedWord = string => {
  let table = new HashTable();
  let firstRepeat = null;
  for (let i = 0; i < string.length; i++) {
    if (/^(?:\w+)$/gm.test(string[i]) === false) {
      continue;
    } else {
      if (table.contains(string[i])) {
        firstRepeat = string[i];
        break;
      } else {
        table.set(string[i]);
      }
    }
  }
  return firstRepeat;
}

const treeIntersection = (tree1, tree2) => {
  let matchingValues = [];
  // need to finish
  return matchingValues;
}

const leftJoin = (leftMap, rightMap) => {
  let results = {};
  let leftKeys = leftMap.getKeys();
  let rightKeys = rightMap.getKeys();
  for (let i = 0; i < rightKeys.length; i++) {
    let currentKey = rightKeys[i];
    if (!leftKeys.includes(currentKey)) {
      continue;
    } else {
      let rightValue = rightMap.get(currentKey);
      let leftValue = leftMap.get(currentKey);
      results[currentKey] = [leftValue, rightValue];
    }
  }
  for (let j = 0; j < leftKeys.length; j++) {
    let currentKey = leftKeys[j];
    let leftValue = leftMap.get(currentKey);
    if (!rightKeys.includes(currentKey)) {
      results[currentKey] = [leftValue, 'NULL']
    } else {
      continue;
    }
  }
  return results;
}

const mostCommon = (str) => {
  let mostOccurrencesKey = 0;
  let wordsTable = new HashTable(1024);
  let splitStr = str.split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    wordsTable.set(splitStr[i], 1);
  }
  console.log(wordsTable.buckets[95]);
  let keys = wordsTable.getKeys();
  let longestBucket = 0;
  for (let j = 0; j < keys.length; j++) {
    if (keys[j].length > longestBucket) {
      longestBucket = keys[j].length;
      mostOccurrencesKey = keys[j];
    }
  }
  let mostOccurrences = wordsTable.get(mostOccurrencesKey);
  return mostOccurrences;
}

// let table1 = new HashTable(1024);
// table1.set('one', 1);
// table1.set('two', 2);
// table1.set('three', 3);

// let table2 = new HashTable(1024);
// table2.set('a', 33);
// table2.set('two', 6);
// table2.set('b', 77);
// table2.set('three', 48);

// console.log(leftJoin(table2, table1));

let str1 = 'in a galaxy far, far away';
console.log(mostCommon(str1));

// let string1 = 'Once upon a time, there was a brave princess who...';
// let string2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

// console.log('expect "a" ', repeatedWord(string1));
// console.log('expect "it" ', repeatedWord(string2));

// console.log(/^(?:\w+)$/gm.test('string'));
// console.log(/^(?:\w+)$/gm.test(' '));
// console.log(/^(?:\w+)$/gm.test('stringtwo'));
// console.log(/^(?:\w+)$/gm.test(2));

module.exports = HashTable;
