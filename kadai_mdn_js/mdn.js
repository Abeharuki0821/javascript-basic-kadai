const today = Date.now();
const date = new Date(today); 

const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

console.log(date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日");
