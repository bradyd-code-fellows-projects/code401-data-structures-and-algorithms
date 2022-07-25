'use strict';

const { LinkedList, Node } = require('../linked-list/LinkedList');

class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size); 
  }

  /**
   *   Takes in a string and returns a hash as integer
   * @param {String} key 
   * @returns 
   */
  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;

    return initialHash % 1024;
  }

  set(key, value){
    // hash is the position inside the table where we will "set" the key value pair
    let position = this.hash(key);
    let data = {[key]: value};

    // we check if there is a bucket at the specified position
    // if bucket exists, add our data
    if (this.buckets[position]){
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
  get(key){
    let position = this.hash(key);

    if(this.buckets[position]){
      let bucket = this.buckets[position];

      // I'll assume no collisions, I'll leave the link list traversal to you (as a stretch goal);
      let value = bucket.head.value[key];
      return value;
    }
  }

  contains(key){
    let position = this.hash(key);
    let ternary = ((this.buckets[position]) ? true : false)
    // console.log(`Contains key: "${key}"? --> ${ternary}`);
    return ternary;
  }

  getKeys(){
    let keys = Object.keys(this.buckets);
    return `Keys: ${keys}`;
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

let table = new HashTable(1024);

// console.log('table pre set:' , table);
// console.log(table.hash('Brady'));
// table.set('Brady', 'Colorado');
// table.set('Joe', 'Here');
// table.set('Matt', 'There');
// table.set('Sheryl', 'Anywhere');
// table.set('Wanda', 'Kansas');
// table.contains('Brady');
// table.contains('Reggie');
// console.log('table post set: ', table);
// console.log(table.getKeys());

let string1 = 'Once upon a time, there was a brave princess who...';
let string2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

console.log('expect "a" ', repeatedWord(string1));
console.log('expect "it" ', repeatedWord(string2));

console.log(/^(?:\w+)$/gm.test('string'));
console.log(/^(?:\w+)$/gm.test(' '));
console.log(/^(?:\w+)$/gm.test('stringtwo'));
console.log(/^(?:\w+)$/gm.test(2));

module.exports = HashTable;
