#Description: This file contains functions that create graphs for the S&P 500 stock data

#Imports
import matplotlib.pyplot as plt
import dataInteract
import io
import base64
import urllib.parse
import pandas as pd

#Method to create a trend graph
def trendGraph(timeFrame):
    #get the last 20 years of stock data
    sp500 = dataInteract.getDailyStock()

    #get the last x days of stock data
    sp500 = sp500.iloc[-timeFrame:]

    # Check if the column exists and is a Series or DataFrame
    trend = sp500[f'Trend_{timeFrame}']
    if isinstance(trend, (pd.Series, pd.DataFrame)):
        #plot the trend
        trend.plot(figsize=(10, 6))

        #set the title
        plt.title(f'S&P 500 Day Trend Over {timeFrame} Days')

        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)

        string = base64.b64encode(buf.read())

        uri = urllib.parse.quote(string)

        return uri
    else:
        print(f"Cannot plot 'Trend_{timeFrame}' as it is not a Series or DataFrame.")

#Method to create a price graph
def priceGraph(timeFrame):

    #get the last 20 years of stock data
    sp500 = dataInteract.getDailyStock()

    sp500 = pd.DataFrame(sp500)

    #get the last x days of stock data
    sp500 = sp500.iloc[-timeFrame:]

    #plot the price
    sp500['Close'].plot(figsize=(10, 6))

    #set the title
    plt.title(f'S&P 500 Price Over {timeFrame}  Days')

    #show the plot
    plt.show()

def temp():
    return trendGraph(5)


temp()
