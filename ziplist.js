// const _ = require('underscore');
// delete this when finished to run in Chrome
const list2 = [1, 2, 3];
const list1 = ['a', 'b', 'c'];


function zipList(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i], b[i]);
  }
  return result;
}
console.log(zipList(list1, list2));

function zipListTheSimpleWay(a, b) {
  return _.flatten(_.zip(a, b));
}
console.log(zipListTheSimpleWay(list2, list1));
