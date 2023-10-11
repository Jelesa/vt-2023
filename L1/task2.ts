//Задание 2 (вариант 7)
//Удалите повторяющиеся элементы из массива чисел.

let arr = [1, 2, 2, 3, 3, 4, 5, 7, 7, 7, 7];
let res = [];

for (let i = 0; i< arr.length; i++) {
  if (!res.includes(arr[i])) {
    res.push(arr[i]);
  }
}

console.log(res);