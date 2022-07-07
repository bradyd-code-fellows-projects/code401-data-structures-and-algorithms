'use strict';

const { Node } = require('../stackAndQueue');
const { chance, AnimalShelter } = require('../AnimalShelter');

let animalShelter = new AnimalShelter();

describe('Animal Shelter Tests', () => {

  test('Can instantiate new empty AnimalShelter', () => {
    expect(animalShelter.front).toBeNull();
    expect(animalShelter.back).toBeNull();
  })

  test('Can enqueue an animal', () => {
    animalShelter.enqueue('dog');
    animalShelter.enqueue('cat');
    expect(animalShelter.front.value).toEqual('dog');
    expect(animalShelter.back.value).toEqual('cat');
    expect(animalShelter.back.next).toBeNull();
  })

  test('Can dequeue a preferred animal', () => {
    animalShelter.dequeue('cat');
    expect(animalShelter.front.value).toEqual('dog');
    animalShelter.dequeue('dog');
    expect(animalShelter.back.next).toBeNull();
  })
})