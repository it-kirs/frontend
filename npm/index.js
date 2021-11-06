const moment = require('moment');
let date=moment();
console.log(date);
let day=moment("20211101", "YYYYMMDD").format('dddd');
console.log(day);