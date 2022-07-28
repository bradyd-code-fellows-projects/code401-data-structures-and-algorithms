# Challenge 32

## Hashmap Repeated Word

### Problem Domain

Find common values in 2 binary trees. Write a function called treeIntersection that takes tow binary trees as parameters and returns a set of values found in both trees.

### Whiteboard

![tree-intersection](../img/tree-intersection.jpg)

### Approach & Efficiency

1. Traverse through tree1, using `set` method at each node to set the value to the hash table
2. Traverse through tree2, using `get` method at each node to see if the value already exists in the hash table
   1. if it does, that value gets added to array holding set of values that exist in both trees
3. Return the set of values that exist in both trees

Time: O(n) because n nodes in tree to traverse through
Space: O(n) because the hash table will occupy as much space as number of values added to it

### Solution

- [Link to Implementation](/implementations/hash-table/index.js)

### Testing

- [Link to Tests](../__tests__/hashTable.test.js)
