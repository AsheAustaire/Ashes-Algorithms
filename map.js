//BASIC MAP FUNCTION


//Way 1
function map(arr, func) {
  let i;
  newArr = [...arr]
  for(i = 0; i < arr.length; i++) {
    newArr[i] = func(newArr[i])
  }
  return newArr
}

//Way 2
function map(arr, func) {
  let i;
  newArr = []
  for(i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]))
  }
  return newArr
}
