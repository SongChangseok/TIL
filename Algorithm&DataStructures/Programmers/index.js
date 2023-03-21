const date = new Date("2021-05-02");
const date2 = new Date("2021-11-02");
date.setMonth(date.getMonth() + 6);
date.setDate(date.getDate() - 1);

console.log(date < date2);
