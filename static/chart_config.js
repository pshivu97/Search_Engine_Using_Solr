let labels1 = ['COVID', 'VACCINE'];
let data1 = [69, 31];
let colors1 = ['#49A9EA', '#36CAAB'];

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['COVID', 'VACCINE'],
        datasets: [ {
            data: [5000, 31],
            backgroundColor: ['#49A9EA', '#36CAAB']
        }]
    },
    options: {
        title: {
            text: "Majority of tweets are related to ....?",
            display: true
        }
    }
});

let labels2 = ['Narendra Modi', 'Joe Biden', 'Kamala Harris', 'Siva Kumar', 'Vaishnavi'];
let data2 = [140, 130.3, 126.3, 157, 130];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#34595E'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "POI related tweets",
            display: true
        },
        legend: {
          display: false
        }
    }
});


let labels3 = ['2016', '2017', '2018', '2019', '2020'];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'line',
    data: {
        labels: labels3,
        datasets: [
          {
            label: 'Covid',
            fill: true,
            backgroundColor: "rgba(179, 181, 198, 0.2)",
            borderColor: "rgba(179, 181, 198, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179, 181, 198, 1)",
            data: [50, 12, 55, 7, 29]
          },
          {
            label: 'Vaccine',
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            data: [51, 10, 32, 20, 44]
          }
        ]
    },
    options: {
        title: {
            text: "Tweet counts",
            display: true
        }
    }
});

let labels4 = ['USA', 'India', 'Mexico'];
let data4 = [83, 67, 66];
let colors4 = ['#B370CF', '#AC5353', '#CFD4D8'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Tweets based on Country",
            display: true
        }
    }
});


let labels5 = ['English', 'Hindi', 'Spanish'];
let data5 = [83, 67, 66];
let colors5 = ['#B370CF', '#AC5353', '#CFD4D8'];

let myChart5 = document.getElementById("myChart5").getContext('2d');

let chart5 = new Chart(myChart5, {
    type: 'pie',
    data: {
        labels: labels5,
        datasets: [ {
            data: data5,
            backgroundColor: colors5
        }]
    },
    options: {
        title: {
            text: "Tweets based on Languages",
            display: true
        }
    }
});

let myChart6 = document.getElementById("myChart6").getContext('2d');
let myChart = new Chart(myChart6, {
  type: 'bar',
  data: {
    labels: ['Modi', 'Biden', 'Arvind', 'CDC', 'Shashi'],
    datasets: [
      {
        label: 'Covid related tweets',
        data: [67.8, 55, 40, 90, 230],
        backgroundColor: '#D6E9C6',
      },
      {
        label: 'Total tweets',
        data: [100, 300, 500, 340, 250],
        backgroundColor: '#FAEBCC',
      }
    ]
  },
  options: {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  }
});


