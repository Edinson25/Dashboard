//Se llaman a las clases para guardarlas en constantes
var ctx = document.getElementById('myChart').getContext('2d');

var bicicletas = document.getElementById('bicicletas').getContext('2d');


var earning = document.getElementById('earning').getContext('2d');


var componentes = document.getElementById('componentes').getContext('2d');


var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Mountain Bike Prov', 'Mountain Bike Ven', 'Road Bike Prov','Road Bike Ven','Touring Bike Prov','Touring Bike Ven'],
        datasets: [{
            label: 'Traffic Source',
            data: [1912, 3399, 2171, 3578,1481,2384],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(182, 255, 88, 1)',
                'rgba(186, 148, 40, 1)',
                'rgba(142, 234, 255, 1)',
                
            ],
          
           
        }]
    },
    options: {
       responsive:true,

    }
});

var bicicletas = new Chart(bicicletas, {
    type: 'doughnut',
    data: {
        labels: [
            'Mountain Bikes Prov',
            'Mountain Bikes Ven',
            'Road Bikes Prov',
            'Road Bikes Ven',
            'Touring Bike Prov',
            'Touring Bike Ven',
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [294, 539, 343,539,461,742],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgba(11, 41, 135, 01',
              'rgba(255, 104, 0, 1)',
              'rgba(32, 255, 0, 1)',

            ],
          
           
        }]
    },
    options: {
       responsive:true,

    }
});

var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['Racks', 'Stands', 'Bottles ', 'Cleaners', 'Fenders', 'Helmets', 'Hydration', 'Lights', 'Locks','Panniers', 'Pumps', 'Tubes'],
        datasets: [{
            label: 'Accesorios',
            data: [120, 159, 9.99, 7.95, 21.98, 34.99, 54.99, 44.99, 25, 125,24.99, 29.99],
            backgroundColor: [
                'rgba(0, 245, 255 ,1 )',
                'rgba(182, 255, 88, 1)',
                'rgba(32, 255, 0, 1)',
                'rgba(103, 132, 9, 1)',
                'rgba(245, 10, 209 , 1)',
                'rgba(255, 104, 0, 1)',
                'rgba(148, 150, 136, 1)',
                'rgba(248, 255, 0 , 1)',
                'rgba(186, 148, 40, 1)',
                'rgba(11, 41, 135, 01',
                'rgba(171, 74, 230, 1)',
                

            ],

            
            
        }]
    },
    options: {
       responsive:true,
    }
});



var componentes = new Chart(componentes, {
    type: 'line',
    data: {
        labels: ['Handlebars', 'Brackets', 'Brakes', 'Chains', 'Cranksets', 'Forks', 'Headsets', 'Pedals', 'Saddles', 'Wheels', ],
        datasets: [{
            label: 'First Dataset',
    data: [{
      x: 20,
      y: 19.77,
      r: 15
    }, {
      x: 40,
      y: 23.97,
      r: 10
    }, {
        x: 40,
        y: 47.28,
        r: 10
      }, {
        x: 40,
        y: 8.98,
        r: 10
      }, {
        x: 40,
        y: 77.91,
        r: 10
      }, {
        x: 40,
        y: 65.80,
        r: 10
      }, {
        x: 40,
        y: 15.18,
        r: 10
      } , {
        x: 40,
        y: 17.97,
        r: 10
      } , {
        x: 40,
        y: 12.04,
        r: 10
      }, {
        x: 40,
        y: 26.97,
        r: 10
      }
    ],
    backgroundColor: 'rgb(255, 99, 132)'
        }]
    },
    options: {
       responsive:true,
    }
});

