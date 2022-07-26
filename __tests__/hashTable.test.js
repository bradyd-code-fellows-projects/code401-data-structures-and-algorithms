'use strict';

const HashTable = require('../implementations/hash-table/index');

describe('Hash table tests', () => {

  let table = new HashTable();

  test('Setting a key/value to a hashtable results in the value being in it', () => {
    table.set('a', 'first val');
    console.log(table.buckets);
    expect(table.buckets).not.toEqual([ undefined ]);
  });

  test.todo('Retrieving based on a key returns the value stored');

  test.todo('Successfully returns null for a key that does not exist in the hashtable');

  test.todo('Successfully returns a list of all unique keys that exist in the hashtable');

  test.todo('Successfully handle a collision within the hashtable');

  test.todo('Successfully retrieve a value from a bucket within the hashtable that has a collision');

  test.todo('Successfully hash a key to an in-range value');
  
})

describe('Tree intersection tests', () => {
  test.todo('happy path');
  test.todo('expected failure');
  test.todo('edge case(s)');
})