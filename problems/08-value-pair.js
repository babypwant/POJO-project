/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
// let object1 = {name: 'One', location: 'NY', age: 3};
// let object2 = {name: 'Two', location: 'SF'};
// valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
// valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/
// create a new array that contains the values of key
//we learned that we can use Objects.values(obj)
function valuePair(obj1, obj2, key) {
  let var1 = obj1[key]
  let var2 = obj2[key]
  let var3 = [var1, var2]

  return (var3);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
