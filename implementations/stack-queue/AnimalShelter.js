'use strict';

const { Node } = require('../linked-list/LinkedList');
const Chance = require('chance');
const chance = new Chance();

let animal = {type: 'dog', name: `${chance.first()}`} || {type: 'cat', name: `${chance.first()}`};

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(animal) {
    let newAnimal = new Node(animal);
    if(this.front) {
      this.back.next = newAnimal;
    } else {
      this.front = newAnimal;
    }
    this.back = newAnimal;
  }

  dequeue(pref) {
    let current = this.front;
    if (pref === current.animal) {
      this.pop();
      console.log(`${pref} removed from queue`)
    } else {
      current = this.next;
    }
  }

}

module.exports = {
  AnimalShelter,
  chance,
};
