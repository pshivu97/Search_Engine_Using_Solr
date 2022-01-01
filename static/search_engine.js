let $ = jQuery;
const poi_data = [{"name":"Narendra Modi","value":"narendramodi"}, {"name":"Joe Biden","value":"JoeBiden"}, {"name":"Felipe Calderon","value":"FelipeCalderon"}, {"name":"Kamala Harris","value":"KamalaHarris"}, {"name":"BarackObama","value":"BarackObama"}, {"name":"Arvind Kejriwal","value":"ArvindKejriwal"}, {"name":"Shashi Tharoor","value":"ShashiTharoor"}, {"name":"Rajnath Singh","value":"rajnathsingh"}, {"name":"Amit Shah","value":"AmitShah"}, {"name":"Rahul Gandhi","value":"RahulGandhi"}, {"name":"Senator Mitt Romney","value":"SenatorRomney"}, {"name":"Bernie Sanders","value":"BernieSanders"}, {"name":"Mike Pence","value":"Mike_Pence"}, {"name":"CDC","value":"CDCgov"}, {"name":"Ministry of Health","value":"MoHFW_INDIA"}, {"name":"Yeidckol Polevnsky","value":"yeidckol"}, {"name":"Tatiana Clouthier","value":"tatclouthier"}, {"name":"SSalud Mx","value":"SSalud_mx"}, {"name":"Andrés Manuel","value":"lopezobrador_"}, {"name":"Cory Booker","value":"CoryBooker"}, {"name":"Vivek Murthy","value":"Surgeon_General"}, {"name":"Nancy Pelosi","value":"SpeakerPelosi"}];
const country_data = [{"name":"USA","value":"USA"},{"name":"India","value":"India"},{"name":"Mexico","value":"Mexico"}]
const language_data = [{"name":"English","value":"en"},{"name":"Hindi","value":"hi"},{"name":"Spanish","value":"es"}]
let url = "http://localhost:5000/";
let prev_search_data;
let crnt_page = 1

function populate_dropdown_values(dropdown_id, json_data){
    for(let i =0;i < json_data.length;i++){
        $("#" + dropdown_id).append($('<option value='+json_data[i].value+'>'+json_data[i].name+'</option>'));
    }
}

function initialise_values(){
    populate_dropdown_values("poi_dropdown", poi_data);
    populate_dropdown_values("country_dropdown", country_data);
    populate_dropdown_values("language_dropdown", language_data);
}

function construct_search_data(){
    let query = $("#query_input_box").val();
    if(query.length == 0){
        alert("Please Enter the search query");
        return;
    }

    let search_data = {
        query       :   query,
        poi_name         :   $("#poi_dropdown").val(),
        country     :   $("#country_dropdown").val(),
        tweet_lang    :   $("#language_dropdown").val(),
        start_row   :   0
    };
    crnt_page = 1;
    prev_search_data = search_data;
    return search_data;
}

function get_tweets(search_data, cbk){
    $.ajax({
        type: "GET",
        url: url + "get_tweets",
        data: search_data,
        success : cbk
    });
}

function handle_search_tweets(){
    let search_data = construct_search_data();
    get_tweets(search_data, display_tweets);
}

function handle_next_page(){
    prev_search_data.start_row = prev_search_data.start_row + 10;
    crnt_page++;
    get_tweets(prev_search_data, display_tweets);
}

function display_tweets(data){
    let $tweet_div = $("#tweet-display-data");
    $tweet_div.empty();
    let tweets = data.tweets;
    for(let i=0; i<tweets.length; i++){
        let curnt_tweet = tweets[i];
        let class_names = 'tweet-data-div';
        if(i == 0){
            class_names = class_names + ' margin_unset'
        }
        let $tweet_display_div = $("<div class='"+class_names+"' id='tweet-display-div-'"+i+"></div>");
        let $poi_name_span = $("<a target='_blank' href='https://twitter.com/"+curnt_tweet.poi_name+"/' class='twitter-blue'>@"+curnt_tweet.poi_name+"</a>");
        let $tweet_text_span = $("<span>"+curnt_tweet.tweet_text+"</span>");
        let $sentiment_span_heading = $("<span><b>Tweet Sentiment</b></span>");
        let sentiment_display_val = curnt_tweet.sentiment_value + " - " + curnt_tweet.sentiment;
        let $sentiment_span = $("<span class='"+curnt_tweet.sentiment+"'>"+sentiment_display_val+"</span>");
        $tweet_display_div.append($poi_name_span);
        $tweet_display_div.append($tweet_text_span);
        $tweet_display_div.append($sentiment_span_heading);
        $tweet_display_div.append($sentiment_span);

        $tweet_div.append($tweet_display_div);
    }

    construct_home_charts(tweets);

    $("#page-id").html("Page : " + crnt_page);

    $("#tweet-display").addClass("left-child");

    $(".tweet-data").removeClass('hidden');
}

function handle_tab_switch(selected_tab){
    selected_tab.addClass('active');
        selected_tab.siblings().removeClass('active');
    if(selected_tab.attr('id') == 'analysis-tab'){
        $("#analysis-div").show();
        $("#search-tweets-div").hide();
        construct_analysis_charts();
    }
    else{
        selected_tab.addClass('active');
        $("#search-tweets-div").show();
        $("#analysis-div").hide();
    }
}

function register_events(){
    $("#search-tweets").click(function(){
        handle_search_tweets();
    });
    $("#search-tweets-tab, #analysis-tab").click(function(){
        handle_tab_switch($(this));
    });
    $("#next-page").click(function(){
       handle_next_page();
    });
}

(function() {
    $("#search-tweets-tab").addClass("active");
    initialise_values();
    register_events();
})();


