const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([0, 1, 2]), 0);
assertEqual(head(['name1', 'name2', 'name3']), 'name1');