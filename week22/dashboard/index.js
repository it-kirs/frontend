const chartjs = require('chart.js');
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
// Тип графика
type: 'line',
 
// Создание графиков
data: {
    // Точки графиков
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    // График
    datasets: [{
        label: 'Total tasks', // Название
        backgroundColor: 'rgb(135, 170, 170)', // Цвет заливки
        borderColor: 'rgb(135, 170, 170)', // Цвет линии
        data: [10, 9, 19, 12, 8] // Данные каждой точки графика
    }]
},
// Настройки графиков
options: {}
});

const anychartconst = require('anychart');
anychart.onDocumentReady(function () {

  // JSON data
  var json = {
    // chart settings
    "chart": {
      "type": "column",
      "title": "Weekly activity",
      // series settings
      "series": [{
// New Tasks
"name": "New",
"color": "rgb(255, 191, 134)",
"data": [
  {"x": "Monday", "value": "1"},
  {"x": "Tuesday", "value": "2"},
  {"x": "Wednesday", "value": "5"},
  {"x": "Thursday", "value": "2"},
  {"x": "Friday", "value": "1"}
]
      },{
// In Progress Tasks
"name": "In Progress",
"color": "rgb(246, 234, 190)",
"data": [
  {"x": "Monday", "value": "7"},
  {"x": "Tuesday", "value": "4"},
  {"x": "Wednesday", "value": "7"},
  {"x": "Thursday", "value": "5"},
  {"x": "Friday", "value": "3"}
]
      },
                 {
// Done Tasks
"name": "Done",
"color": "rgb(200, 227, 212)",
"data": [
  {"x": "Monday", "value": "2"},
  {"x": "Tuesday", "value": "3"},
  {"x": "Wednesday", "value": "7"},
  {"x": "Thursday", "value": "5"},
  {"x": "Friday", "value": "4"}
]
      }
     ],
      "container": "container"
    }
  };

  var chart = anychart.fromJson(json);
  chart.legend(true);
  chart.draw();
});

const moment = require('moment');
let now = moment();
moment.locale('ru');
console.log(now.format('dddd, MMMM DD YYYY, h:mm:ss'));
document.getElementById('date').innerHTML=now.format('dddd, MMMM DD YYYY');