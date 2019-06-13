var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
//  var array = [...element, array]
//  var element = 'foo'
//  var newArray = array.unshift(element);
//  const newArray = [element, ...array]
//  var newArray = array.unshift(element)
    var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = array.unshift(element)
}
