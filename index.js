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
//!------------------TASK -----------------------------------------------------

//!-----------------------------------------------------------------------------------
//!------------------TASK -----------------------------------------------------