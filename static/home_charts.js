function construct_chart_sentiment(sentiment_positive, sentiment_negative, sentiment_neutral) {
    let labels1 = ['Positive', 'Neutral', 'Negative'];
    let data1 = [sentiment_positive, sentiment_neutral, sentiment_negative];
    let colors1 = ['#32CD32', '#FFA500', '#FF0000'];

    let home_chart_sentiment = document.getElementById("home-sentiment-chart").getContext('2d');

    let chart1 = new Chart(home_chart_sentiment, {
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
                text: "Analysis of Sentiments",
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

function construct_chart_country(tweet_usa, tweet_india, tweet_mexico) {
    let labels3 = ['USA', 'India', 'Mexico'];
    let data3 = [tweet_usa, tweet_india, tweet_mexico];
    let colors3 = ['#49A9EA', '#98FB98', '#7B68EE'];

    let home_chart_country = document.getElementById("home-country-chart").getContext('2d');

    let chart3 = new Chart(home_chart_country, {
        type: 'bar',
        data: {
            labels: labels3,
            datasets: [{
                data: data3,
                backgroundColor: colors3
            }]
        },
        options: {
            title: {
                text: "Tweet count based on Languages",
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

function construct_chart_language(tweet_en, tweet_hi, tweet_es) {
    let labels2 = ['English', 'Hindi', 'Spanish'];
    let data2 = [tweet_en, tweet_hi, tweet_es];
    let colors2 = ['#40E0D0', '#B370CF', '#FFA500'];

    let home_chart_language = document.getElementById("home-language-chart").getContext('2d');

    let chart2 = new Chart(home_chart_language, {
        type: 'bar',
        data: {
            labels: labels2,
            datasets: [{
                data: data2,
                backgroundColor: colors2
            }]
        },
        options: {
            title: {
                text: "Tweet count based on Country",
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

function construct_home_charts(tweets){
    $('#home-charts-div').html('<div class="container" style="position: relative; height:35vh; width:35vw">\n' +
        '                    <div class="row row-override-css">\n' +
        '                        <div class="col-6 chart">\n' +
        '                            <canvas id="home-sentiment-chart" width="500" height="500"></canvas>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="row row-override-css">\n' +
        '                        <div class="col-6 chart">\n' +
        '                            <canvas id="home-country-chart" width="500" height="500"></canvas>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="row row-override-css">\n' +
        '                        <div class="col-6 chart">\n' +
        '                            <canvas id="home-language-chart" width="500" height="500"></canvas>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>');
    let sentiment_positive = 0; let sentiment_negative = 0; let sentiment_neutral = 0;
    let tweet_en = 0; let tweet_hi = 0; let tweet_es = 0;
    let tweet_usa = 0; let tweet_india = 0; let tweet_mexico = 0;
    for(let i=0; i<tweets.length; i++){
        let tweet = tweets[i];

        if(tweet.sentiment == 'positive'){
            sentiment_positive++;
        }
        else if(tweet.sentiment == 'negative'){
            sentiment_negative++;
        }
        else{
            sentiment_neutral++;
        }

        if(tweet.tweet_lang == 'en'){
            tweet_en++;
        }
        else if(tweet.tweet_lang == 'hi'){
            tweet_hi++;
        }
        else{
            tweet_es++;
        }

        if(tweet.country == 'USA'){
            tweet_usa++;
        }
        else if(tweet.country == 'India'){
            tweet_india++;
        }
        else{
            tweet_mexico++;
        }
    }
    construct_chart_sentiment(sentiment_positive, sentiment_negative, sentiment_neutral);
    construct_chart_country(tweet_usa, tweet_india, tweet_mexico);
    construct_chart_language(tweet_en, tweet_hi, tweet_es);
}