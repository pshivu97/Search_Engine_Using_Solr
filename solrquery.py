import json
# if you are using python 3, you should
import urllib.request
import re
from textblob import TextBlob
from anyascii import anyascii
from urllib.parse import quote


'''
http://3.145.79.135:8983/solr/IRF21P4/select?q.op=OR&q=tweet_text%3Acovid%20country%3AIndia%20tweet_lang%3Ahi%20poi_name%3Anarendramodi
'''

AWS_IP = '52.15.120.225'
CORE_NAME = "IRF21P4"


def server_call(query_params):
    return solr(CORE_NAME, query_params)

'''
query, country,tweet_lang, poi_name, start_row
'''


def format_query(query_params):
    select_q = "/select?q="
    queries = ''
    q_text = query_params['query']
    # q_list = tokenize_query(q_text)
    q_list = q_text.split()
    space_separator = '%20'
    colon = '%3A'
    tweet_text = 'tweet_text'
    star = '*'
    _and = '&'
    for i in range(len(q_list)):
        if i == 0:
            tweet_text = tweet_text + colon + star + q_list[i] + star
        if i == len(q_list) - 1 and len(q_list) > 1:
            tweet_text = tweet_text + q_list[i] + star
        if 0 < i < len(q_list) - 2:
            tweet_text = tweet_text + q_list[i] + star
    # unicode_tweet_text = ''.join(r'\u{:04X}'.format(ord(chr)) for chr in tweet_text)
    queries = queries + tweet_text
    fl_score = "&wt=json&indent=true&rows=10"
    hasstartrow = False
    count = 1
    if 'country' in query_params:
        if query_params['country'] != '':
            country = space_separator + 'country' + colon + query_params['country']
            count = count + 1
            queries = queries + country
    if 'tweet_lang' in query_params:
        if query_params['tweet_lang'] != '':
            lang = space_separator + 'tweet_lang' + colon + query_params['tweet_lang']
            count = count + 1
            queries = queries + lang
    if 'poi_name' in query_params:
        if query_params['poi_name'] != '':
            poi_name = space_separator + 'poi_name' + colon + query_params['poi_name']
            count = count + 1
            queries = queries + poi_name
    if 'start_row' in query_params:
        if query_params['start_row'] != '':
            hasstartrow = True
            start_row = _and + 'start=' + str(query_params['start_row'])
            fl_score = '&wt=json&indent=true{}&rows=10'.format(start_row)
            count = count + 1
            queries = queries + fl_score
    if not hasstartrow:
        queries = queries + fl_score
    if count > 1:
        select_q = "/select?q.op=AND&q="
        select_q = select_q + queries
    else:
        select_q = "/select?q="
        select_q = select_q + queries
    return select_q


def sentiment(cleaned_text):
    # Returns the sentiment based on the polarity of the input TextBlob object
    if cleaned_text.sentiment.polarity > 0:
        return cleaned_text.sentiment.polarity, 'positive'
    elif cleaned_text.sentiment.polarity < 0:
        return cleaned_text.sentiment.polarity, 'negative'
    else:
        return cleaned_text.sentiment.polarity, 'neutral'


def performsentimentAnalysis(docs):
    for tweet in docs:
        if tweet.get('tweet_lang') == "en":
            text = tweet.get('text_en')
            text = text.lower()
        if tweet.get('tweet_lang') == "es":
            text = tweet.get('text_es')
        if tweet.get('tweet_lang') == "hi":
            text = tweet.get('tweet_text')
        if text is None:
            text = tweet.get('tweet_text')
        text_blob = TextBlob(text)
        polarity, _sentiment = sentiment(text_blob)
        tweet['sentiment_value'] = polarity
        tweet['sentiment'] = _sentiment
    return docs


def solr(core_name, query_params):
    solr_url = f'http://{AWS_IP}:8983/solr/'

    inurl = solr_url + core_name + format_query(query_params)

    data = urllib.request.urlopen(inurl)
    docs = json.load(data)['response']['docs']
    
    resp = performsentimentAnalysis(docs)

    return resp;

    # print(docs)
    #
    # for i in range(len(docs)):
    #     print(docs[i])


if __name__ == '__main__':
    mydict = {
        'query': 'india',
        'country': 'USA',

    }
    solr(CORE_NAME,mydict)
