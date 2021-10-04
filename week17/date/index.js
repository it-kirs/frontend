function formatDate(date) {
  let result = new Date()-date;
  if (result < 1000) { 
    return "прямо сейчас";
  }
  else if (result < 60000) {
    return Math.round(result/1000) + " сек. назад";
  }
  else if (result < 3600000) {
    return Math.round(result/60000) + " мин. назад";
  }
  let day=("0"+date.getDate()).toString().slice(-2);
  let month=("0"+(date.getMonth()+1)).toString().slice(-2);
  let year=(date.getFullYear()).toString().slice(-2);
  let hour=("0"+date.getHours()).toString().slice(-2);
  let minutes=("0"+date.getMinutes()).toString().slice(-2);
  
  return `${day}.${month}.${year} ${hour}:${minutes}`;
  }
  
alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// дата 4 дня назад
alert( formatDate(new Date(new Date - 86400* 4 * 1000)) );