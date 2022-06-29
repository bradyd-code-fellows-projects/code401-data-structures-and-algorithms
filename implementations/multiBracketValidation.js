'use strict';

const { Stack } = require('./stackAndQueue');
const { Node } = require('./LinkedList');

function matchingBrackets(str) {
  let stack = new Stack();
  let top;
  if (str[0] === ')' || str[0] === ']' || str[0] === '}') {
    return false;
  }
  for (let i = 0; i < str.length; i++) {

    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
      continue;

    } else if (str[i] === ']' || str[i] === ']' || str[i] === '}') {
      top = stack.peek();
      if ((top === '[' && str[i] === ']') || (top === '(' && str[i] === ')') || (top === '{' && str[i] === '}')) {
        stack.pop();
        continue;
      } else {
        return false;
      }

    }
    
  }
  return stack.isEmpty();
}

let str1 = '{}'; // true
let str2 = '{}(){}'; // true
let str3 = '[({}]'; // false
let str4 = '(]('; // false
let str5 = '{'; // false

// console.log('str1: ', matchingBrackets(str1));
console.log('str2: ', matchingBrackets(str2));
// console.log('str3: ', matchingBrackets(str3));
// console.log('str4: ', matchingBrackets(str4));
// console.log('str5: ', matchingBrackets(str5));
