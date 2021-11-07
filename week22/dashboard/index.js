const chart = require('chart.js');
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
// Тип графика
type: 'line',
 
// Создание графиков
data: {
    // Точки графиков
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    // График
    datasets: [{
        label: 'Weekly dashbord', // Название
        backgroundColor: 'rgb(255, 99, 132)', // Цвет закраски
        borderColor: 'rgb(255, 99, 132)', // Цвет линии
        data: [1, 2, 5, 5, 8, 1, 0] // Данные каждой точки графика
    }]
},
 
// Настройки графиков
options: {}
});


anychart.onDocumentLoad(function () {
    // create an instance of a pie chart
    var chart = anychart.pie();
    // set the data
    chart.data([
      ["Chocolate", 5],
      ["Rhubarb compote", 2],
      ["Crêpe Suzette", 2],
      ["American blueberry", 2],
      ["Buttermilk", 1]
    ]);
    // set chart title
    chart.title("Top 5 pancake fillings");
    // set the container element 
    chart.container("container");
    // initiate chart display
    chart.draw();
  });