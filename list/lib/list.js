'use strict';

/**
 * List class
 * @param length {number}
 * @param data {object}
 */
class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  // list with length of 0 and data as empty array

  /**
 * / reindex()
 * loop over object's keys of data object.
 * Sort the keys of the data object.
 * Run reduce on the sorted object keys during each iteration.
 * Add index as key of accumulator object.
 * Add current value in data object as value for accumulator.
 * In other words, sort the object keys of the data object, and return the object with keys sorted.
 */
  reindex() {
    let data = Object.keys(this.data).sort().reduce((acc,val,idx) => {
      acc[idx] = this.data[val];
      return acc;
    },{});
    // length of instance list is determined by number of keys in data object passed in
    // instance data object equals sorted data object
    this.length = Object.keys(data).length;
    this.data = data;
  }

  /**
 * / push()
 * If only one item in arguments array.
 * Then add an index with a value of "item".
 * Then return the length of instance.
 */
  push(item) {
    if ( arguments.length === 1 ) {
      this.data[this.length++] = item;
    }
    return this.length;
  }

  /**
   * / pop()
   * If instance has no length, return undefined.
   * Otherwise store last index of data object in item variable.
   * Then delete last index of data object, subtract one from the instance's length property
   * , and return item variable.
   */
  pop() {
    if ( ! this.length ) { return undefined; }
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  /**
   * / shift()
   * If data has no length, return undefined.
   * Otherwise, store first index of data object in item variable.
   * Delete first index of data object
   * , run the reindex method to resort object entries
   * , and return item variable.
   */
  shift() {
    if ( ! this.data[0] ) { return undefined; }
    let item = this.data[0];
    delete this.data[0];
    this.reindex();
    return item;
  }

  /**
   * / unshift()
   * @param item
   * Store item value in last index of data object.
   * Sort keys using reindex, and return length.
   */
  unshift(item) {
    this.data[-1] = item;
    this.reindex();
    return this.length;
  }

  /**
   * / forEach()
   * @param callback {function}
   * If data has length, loop over array from 0th index to last index.
   * Call the callback function with this[current index], and index as arguments each iteration.
   */
  forEach(callback) {
    if ( this.length ) {
      for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i);
      }
    }
  }

  /**
   * / map()
   * @param callback {function} 
   * If no length, return undefined.
   * Store new List instance in variable named "result".
   * Loop over length of object from 0th index to last index.
   * Push to result variable callback func that takes in value in current data index, and index.
   * Then, return the result.
   */
  map(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this.data[i], i));
    }
    return result;
  }

  /**
   * / filter()
   * @param callback {function}
   * If no length, return undefined.
   * Otherwise, store new List instance in variable named "result".
   * Loop over length of object from 0th index to last index.
   * If there is a callback function with the current index of data passed in
   * , then push current index of data to result variable.
   * Then return the result.
   */
  filter(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this.data[i])) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  /**
   * / reduce()
   * @param callback {function}
   * @param state
   * If no length, return undefined.
   * Loop over length of object from 0th index to last index.
   * Call callback function with state parameter and current data index, along with index as arguments
   * , and store this callback in the state parameter.
   * Then return state.
   */
  reduce(callback, state) {
    if ( ! this.length ) { return undefined; }
    for (let i = 0; i <= this.length - 1; i++) {
      state = callback(state,this.data[i], i);
    }
    return state;
  }

}

module.exports = List;
