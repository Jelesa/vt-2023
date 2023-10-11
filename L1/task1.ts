//Задание 1 (вариант 7)
//Реализовать функцию Array.includes из JavaScript в системе типов TypeScript

type Includes<T extends unknown[], U> = U extends T[number] ? true : false;


type res = Includes<[1, 3], 2>; // false
type res = Includes<[1, 2, 3], 2>; // true