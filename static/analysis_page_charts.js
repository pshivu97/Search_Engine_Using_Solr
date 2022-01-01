function construct_covid_curve_chart() {
    let labels1 = ['December 2019', 'March 2020 ', 'July 2020', 'November 2020', 'March 2021', 'July 2021', 'November 2021', 'December 2021'];
    let TimelineIndia = document.getElementById("time-line-India").getContext('2d');

    let chart1 = new Chart(TimelineIndia, {
        type: 'line',
        data: {
            labels: labels1,
            datasets: [
                {
                    label: 'Covid cases in India',
                    fill: true,
                    backgroundColor: "rgba(179, 181, 198, 0.2)",
                    borderColor: "rgba(179, 181, 198, 1)",
                    data: [0, 0, 227330, 562343, 167845, 510642, 158214, 105891]
                },
                {
                    label: 'POI related tweets',
                    fill: true,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    data: [0, 3500 * 2, 27500 * 5, 50000 * 6, 75000 * 5, 130000 * 3, 195000 * 2, 400000]
                }
            ]
        },
        options: {
            title: {
                text: "India",
                display: true
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            display: false
                        }
                    }
                ]
            }
        }
    });


    // let labels2 = ['March 2020 ', 'July 2020', 'November 2020', 'March 2021','July 2021', 'November 2021', 'December 2021'];
    let TimelineMexico = document.getElementById("time-line-Mexico").getContext('2d');

    let chart2 = new Chart(TimelineMexico, {
        type: 'line',
        data: {
            labels: labels1,
            datasets: [
                {
                    label: 'Covid cases in Mexico',
                    fill: true,
                    backgroundColor: "rgba(179, 181, 198, 0.2)",
                    borderColor: "rgba(179, 181, 198, 1)",
                    data: [0, 3, 44052, 139703, 247692, 285692, 349935, 348408]
                },
                {
                    label: 'POI related tweets',
                    fill: true,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    data: [0, 0, 42000, 60000, 150000, 200000, 237800, 260000]
                },
            ]
        },
        options: {
            title: {
                text: "Mexico",
                display: true
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            display: false,
                        }
                    }
                ]
            }
        }
    });


    //let labels3 = ['March 2020 ', 'July 2020', 'November 2020', 'March 2021','July 2021', 'November 2021', 'December 2021'];
    let TimelineUSA = document.getElementById("time-line-USA").getContext('2d');

    let chart3 = new Chart(TimelineUSA, {
        type: 'line',
        data: {
            labels: labels1,
            datasets: [
                {
                    label: 'Covid cases in USA',
                    fill: true,
                    backgroundColor: "rgba(179, 181, 198, 0.2)",
                    borderColor: "rgba(179, 181, 198, 1)",
                    data: [0, 65, 1369552, 2924724, 7549223, 4777843, 9303247, 9460204]
                },
                {
                    label: 'POI related tweets',
                    fill: true,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    data: [150, 950 * 400, 2500 * 400, 3224724, 5549223, 5777843, 7303247, 8460204]
                }
            ]
        },
        options: {
            title: {
                text: "USA",
                display: true
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            display: false
                        }
                    }
                ]
            }
        }
    });
}

function construct_tweets_distribution_chart() {
    let labels4 = ['USA', 'India', 'Mexico'];
    let data4 = [79291, 27679, 32262];
    let colors4 = ['#98FB98', '#DA70D6', '#1E90FF'];

    let Country_tweets = document.getElementById("Country_tweets").getContext('2d');

    let chart4 = new Chart(Country_tweets, {
        type: 'pie',
        data: {
            labels: labels4,
            datasets: [{
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
    let data5 = [89817, 17137, 32278];
    let colors5 = ['#DC143C', '#DAA520', '#00BFFF'];

    let Language_tweets = document.getElementById("Language_tweets").getContext('2d');

    let chart5 = new Chart(Language_tweets, {
        type: 'pie',
        data: {
            labels: labels5,
            datasets: [{
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
}

function construct_poi_vs_covid_tweets_chart() {
    let POI_tweets = document.getElementById("POI-tweets").getContext('2d');
    let poi_covid_tweets_chart = new Chart(POI_tweets, {
        type: 'bar',
        data: {
            labels: ['Narendra Modi', 'Joe Biden', 'Kamala Harris', 'Arvind Kejriwal', 'BarackObama', 'Shashi Tharoor', 'CDC', 'Felipe Calderon', 'Rajnath Singh', 'Amit Shah', 'Rahul Gandhi', 'Senator Mitt Romney', 'Bernie Sanders', 'Mike Pence', 'Ministry of Health', 'Yeidckol Polevnsky', 'Tatiana Clouthier', 'SSalud Mx', 'Andrés Manuel', 'Cory Booker', 'Vivek Murthy', 'Nancy Pelosi'],
            datasets: [
                {
                    label: 'Covid related tweets',
                    data: [551, 731, 884, 649, 385, 344, 1561, 79, 250, 246, 511, 314, 877, 187, 211, 133, 7, 456, 135, 572, 848, 653],
                    backgroundColor: '#DC143C',
                },
                {
                    label: 'Total tweets',
                    data: [3064, 2715, 2439, 2278, 2755, 1589, 2524, 765, 1544, 2713, 2995, 1270, 2572, 1227, 957, 3022, 284, 2927, 3133, 2115, 1510, 2334],
                    backgroundColor: '#32CD32',
                }
            ]
        },
        options: {
            scales: {
                xAxes: [{stacked: true}],
                yAxes: [{stacked: true}]
            }
        }
    });
}

function construct_poi_vs_reply_tweets_chart() {
    let POI_reply_tweets = document.getElementById("POI_reply_tweets").getContext('2d');
    let myChartnew = new Chart(POI_reply_tweets, {
        type: 'bar',
        data: {
            labels: ['Narendra Modi', 'Joe Biden', 'Kamala Harris', 'Arvind Kejriwal', 'BarackObama', 'Shashi Tharoor', 'CDC', 'Felipe Calderon', 'Rajnath Singh', 'Amit Shah', 'Rahul Gandhi', 'Senator Mitt Romney', 'Bernie Sanders', 'Mike Pence', 'Ministry of Health', 'Yeidckol Polevnsky', 'Tatiana Clouthier', 'SSalud Mx', 'Andrés Manuel', 'Cory Booker', 'Vivek Murthy', 'Nancy Pelosi'],
            datasets: [
                {
                    label: 'Reply tweet count',
                    data: [1191, 2900, 884, 2423, 2094, 2809, 792, 34, 113, 155, 76, 502, 1283, 129, 152, 0, 0, 265, 3, 3, 225, 1348],
                    backgroundColor: '#FFA500',
                }
            ]
        },
        options: {
            scales: {
                xAxes: [{stacked: true}],
                yAxes: [{stacked: true}]
            }
        }
    });
}

function construct_covid_vaccine_tweet_chart() {
    let labels7 = ['COVID', 'VACCINE'];
    let data7 = [55388, 41066];
    let colors7 = ['#49A9EA', '#36CAAB'];

    let covid_tweets = document.getElementById("covid-vaccine-tweets").getContext('2d');

    let chart7 = new Chart(covid_tweets, {
        type: 'doughnut',
        data: {
            labels: labels7,
            datasets: [{
                data: data7,
                backgroundColor: colors7
            }]
        },
        options: {
            title: {
                text: "Majority of tweets are related to ....?",
                display: true
            }
        }
    });
}

function construct_poi_reply_chart() {
    let labels2 = ['Narendra Modi', 'Joe Biden', 'Kamala Harris', 'Arvind Kejriwal', 'BarackObama', 'Shashi Tharoor', 'CDC', 'Rajnath Singh', 'Amit Shah', 'Rahul Gandhi', 'Senator Mitt Romney', 'Bernie Sanders', 'Mike Pence', 'Ministry of Health', 'SSalud Mx', 'Cory Booker', 'Vivek Murthy', 'Nancy Pelosi'];

    let poi_reply_analysis_chart = document.getElementById("poi-reply-analysis-tweets").getContext('2d');

    let chart2 = new Chart(poi_reply_analysis_chart, {
        type: 'bar',
        data: {
            labels: labels2,
            datasets: [{
                label: "Positive",
                backgroundColor: "#32CD32",
                data: [737, 1105, 515, 1289, 839, 1226, 340, 89, 18, 24, 214, 557, 54, 62, 5, 2, 113, 482]
            },
                {
                    label: "Neutral",
                    backgroundColor: "#FFA500",
                    data: [309, 1243, 630, 923, 1037, 1057, 286, 18, 128, 42, 186, 446, 57, 63, 259, 0, 74, 563]
                },
                {
                    label: "Negative",
                    backgroundColor: "#FF0000",
                    data: [145, 552, 263, 211, 218, 526, 166, 6, 9, 10, 102, 280, 18, 27, 1, 1, 38, 303]
                }]
        },
        options: {
            // title: {
            //     text: "POI related tweets",
            //     display: true
            // },
            legend: {
                display: true
            }
        }
    });
}

function construct_vaccine_analysis_chart() {
    let labels1 = ['Positive', 'Neutral', 'Negative'];
    let data1 = [13682, 25914, 6413];
    let colors1 = ['#32CD32', '#FFA500', '#FF0000'];

    let vaccine_analysis_chart = document.getElementById("vaccine-analysis-tweets").getContext('2d');

    let chart1 = new Chart(vaccine_analysis_chart, {
        type: 'bar',
        data: {
            labels: labels1,
            datasets: [{
                data: data1,
                backgroundColor: colors1
            }]
        },
        options: {
            title: {
                text: "Vaccine hesitancy",
                display: true
            },
            legend: {
                display: false
            },
            scales: {
      yAxes: [
          {
            ticks: {
//              display: false,
              beginAtZero: true
            }
          }
      ]
    }
        }
    });
}

function construct_vaccine_hesitancy_chart() {
    let labels1 = ['Supportive', 'Neutral', 'Hesitant'];
    let data1 = [8231, 3166, 6947];
    let colors1 = ['#32CD32', '#FFA500', '#FF0000'];

    let vaccine_analysis_chart = document.getElementById("vaccine-hesitancy-tweets").getContext('2d');

    let chart1 = new Chart(vaccine_analysis_chart, {
        type: 'bar',
        data: {
            labels: labels1,
            datasets: [{
                data: data1,
                backgroundColor: colors1
            }]
        },
        options: {
            title: {
                text: "Vaccine hesitancy",
                display: true
            },
            legend: {
                display: false
            },
            scales: {
      yAxes: [
          {
            ticks: {
//              display: false,
              beginAtZero: true
            }
          }
      ]
    }
        }
    });
}

function construct_analysis_charts() {
    $("#analysis-charts-div").html('<div class="container">\n' +
        '        <center><h3> Tweets Distribution based on Country and Language</h3></center>\n' +
        '        <div class="row">\n' +
        '            <div class="col-md-6 chart">\n' +
        '                <canvas id="Country_tweets" width="300" height="300"></canvas>\n' +
        '            </div>\n' +
        '            <div class="col-md-6 chart">\n' +
        '                <canvas id="Language_tweets" width="300" height="300"></canvas>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <center><h3> Number of Covid and Vaccine related tweets</h3></center>\n' +
        '        <div class="row">\n' +
        '            <div class="col-md-8 chart">\n' +
        '                <canvas id="covid-vaccine-tweets" width="800" height="400"></canvas>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <center><h3> POI Total Tweet and Covid related tweets count </h3></center>\n' +
        '        <div class="row">\n' +
        '            <div class="col-md-12 chart">\n' +
        '                <canvas id="POI-tweets" width="800" height="400"></canvas>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <center><h3> Replies Count for each POI</h3></center>\n' +
        '        <div class="row">\n' +
        '            <div class="col-md-12 chart">\n' +
        '                <canvas id="POI_reply_tweets" width="800" height="400"></canvas>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <center><h3>Covid curve vs POI related tweets</h3></center>\n' +
        '        <div class="row">\n' +
        '            <div class="col-md-4 chart">\n' +
        '                <canvas id="time-line-India" width="800" height="1000"></canvas>\n' +
        '            </div>\n' +
        '            <div class="col-md-4 chart">\n' +
        '                <canvas id="time-line-USA" width="800" height="1000"></canvas>\n' +
        '            </div>\n' +
        '            <div class="col-md-4 chart">\n' +
        '                <canvas id="time-line-Mexico" width="800" height="1000"></canvas>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '       <center><h3> Sentiment Analysis for POI COVID Tweet Replies </h3></center>\n' +
        '        <div class="row">\n' +
        '            <div class="col-md-12 chart">\n' +
        '                <canvas id="poi-reply-analysis-tweets" width="800" height="400"></canvas>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '       <center><h3> Attitude of General Population Towards Vaccine </h3></center>\n' +
        '        <div class="row">\n' +
        '            <div class="col-md-6 chart">\n' +
        '                <canvas id="vaccine-analysis-tweets" width="500" height="400"></canvas>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '       <center><h3> Vaccine Hesistancy on General Population </h3></center>\n' +
        '        <div class="row">\n' +
        '            <div class="col-md-6 chart">\n' +
        '                <canvas id="vaccine-hesitancy-tweets" width="500" height="400"></canvas>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>');

    construct_covid_curve_chart();
    construct_tweets_distribution_chart();
    construct_poi_vs_covid_tweets_chart();
    construct_poi_vs_reply_tweets_chart();
    construct_covid_vaccine_tweet_chart();
    construct_poi_reply_chart();
    construct_vaccine_analysis_chart();
    construct_vaccine_hesitancy_chart();
}