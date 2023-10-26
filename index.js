//!------------------TASK 1-----------------------------------------------------
//какой день в году по счету
function toDayOfYear(date) {
   let year = date[2];
   let month = date[1] - 1;
   let day = date[0];

   let leapYear = (year % 4 === 0 && year % 100 > 0) || year % 400 == 0 ? 366 : 365; //високосный или нет

   let finalyDateOfTheYear = new Date(year, 11, 31);
   let ourDay = new Date(year, month, day);

   const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000) //разица между датами


   let differenceBetweenDates = dayDif(ourDay, finalyDateOfTheYear);

   return leapYear - differenceBetweenDates;
}



console.log(toDayOfYear([1, 1, 1060]));
console.log(toDayOfYear([25, 12, 2017]));
console.log(toDayOfYear([31, 10, 1991]));
console.log(toDayOfYear([1, 5, 3000]));
console.log(toDayOfYear([31, 12, 2100]));

//!-----------------------------------------------------------------------------------
//!------------------TASK 2-----------------------------------------------------
//выходной день или нет
const isWeekday = (date) => date.getDay() % 6 !== 0;
console.log(isWeekday(new Date(2021, 0, 10)));
//!-----------------------------------------------------------------------------------
//!------------------TASK 3-----------------------------------------------------
//удаление дубликатов из массива !!!!! НЕ ЗАВЕРШЕНА!!!! 
function solve(arr) {
   let resultArray = arr;
   for (let index = 0; index < arr.length; index++) {
      const value = arr[index];

      if (arr.findIndex(v => v > index)) {
         resultArray.splice(index, 1);
      }

   }
   return resultArray;
}

console.log(solve([1, 4, 4, 5, 6, 3, 2, 4, 3]));
//!-----------------------------------------------------------------------------------
//!------------------TASK 4-----------------------------------------------------
// расстояние между точками
class Point {
   constructor(x, y) {
      this.x = x;
      this.y = y;
   }
}
// let a = new Point(1, 6);
// let b = new Point(4, 2);

function distanceBetweenPoints(a, b) {
   let distance = Math.sqrt(((a.x - b.x) ** 2) + ((a.y - b.y) ** 2));
   return +distance.toFixed(6);
}


console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)))

// (-10.2, 12.5), new Point(0.3, 14.7), 10.728001);
//!-----------------------------------------------------------------------------------
//!------------------TASK -----------------------------------------------------

//!-----------------------------------------------------------------------------------
//!------------------TASK -----------------------------------------------------

//!-----------------------------------------------------------------------------------
