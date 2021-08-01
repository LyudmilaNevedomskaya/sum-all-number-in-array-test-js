function sumItems(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += sumItems(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
}





// console.log(sumItems([1, 3, 3, 5, 5]));
// console.log(sumItems([12]));
// console.log(sumItems([[1, 2, [[3], 4]], 5, []]));
module.exports = sumItems;