/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDay {
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6,
  sunday = 7,
}

function isWeekend(day: weekDay): boolean {
  return [weekDay.saturday, weekDay.sunday].includes(day);
}

// console.log(isWeekend(weekDay.monday));
// console.log(isWeekend(weekDay.saturday));
// console.log(isWeekend(4));
// console.log(isWeekend(6));
