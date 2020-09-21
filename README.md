# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shadmerhi/lotide`

**Require it:**

`const _ = require('@shadmerhi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of an array.
* `tail(array)`: Returns the entire array after the head element.
* `eqArrays(array1, array2)`: Determines whether two arrays are equal.
* `eqObjects(object1, object2)`: Determines whether two objects are equal.
* `findKey(object, callback)`: Finds the key of the first instance of a value in an object based on a callback function. Returns undefined if no key-value pair satisfies the callback.
* `findKeyByValue(object, value)`: Finds the key that matches the value of interest. Returns undefined if object does not contain the specified value.
* `flatten(input)`: Returns a single-dimension array when passed an array of any dimension.
* `letterPositions(string)`: Returns an object indicating all index occurences of each letter in a string.
* `map(array, callback)`: Returns an array of all first letters of each string in an array of strings.
* `middle(array)`: Returns the middle element(s) of an array.
* `takeUntil(array, callback)`: Creates a new array of all elements in the passed array until the callback returns false.
* `without(array, items)`: Returns an array without the items specified.
