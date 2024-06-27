function minimal(a, b) {
    if (a > b) {
      return b;
    } else if (a < b) {
      return a;
    } else if (a == b) {
      return a;
    }
  }
  console.log(minimal(3, 3));
  
  function findIndex(array, number) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === number) {
        return parseInt(i)
      }
    } return -1
  }
  console.log(findIndex([1, 2, 3, 4, 5], 3));
  console.log(findIndex([1, 2, 3, 4, 5], 6));
  console.log(findIndex([1, 2, 3, 4, 5], 5));