/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/
// create a new array that contains the values of key
//we learned that we can use Objects.values(obj)
function valuePair(obj1, obj2, key) {
  let newArr = []
  if (Object.values(obj1) === key) {
    newArr.push(obj1[key])
  }
  if (Object.values(obj2) === key) {
    newArr.push(obj2[key])
  }
  console.log(newArr);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
