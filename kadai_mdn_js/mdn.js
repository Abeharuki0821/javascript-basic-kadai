const date = new Date("2000-01-17T16:45:30");
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];

console.log(date.getFullYear()+"年"+(date.getMonth() + 1)+"月"+date.getDate()+"日"+date.getHours()+"時"+date.getMinutes()+"分"+date.getSeconds()+"秒");