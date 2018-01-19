//BASIC MAP FUNCTION

function map(arr, func) {
  let i;
  newArr = [...arr]
  for(i = 0; i < arr.length; i++) {
    newArr[i] = func(newArr[i])
  }
  return newArr
}
