import React, {useState, useEffect} from 'react';
import './css/index.css'

export function Bio() {
    return (
        <div className="bio-container">
            <div className="bio-content">
                <p className="p-bio">
                    500Info streamlines stock market decision-making with robust tools and a user-friendly interface. It
                    offers news updates,
                    predictive analysis, and thorough data examination to assist users at every level of experience.
                </p>
                <p className="h3-bio"><strong>At this point, you may be asking, "How does it work?"</strong> It's pretty
                    cool. Let's start with
                    how
                    it makes stock predictions.</p>
                <ol>
                    <li className="li-bio">
                        It calls a special "library", or a tool published by other developers to add features to code,
                        called
                        Yahoo Finance. Yahoo Finance provides
                        500Info with tons of stock market data about the S&P 500- about 100 years worth of daily stock
                        prices
                        and metrics!
                    </li>
                    <li className="li-bio">
                        Next, 500Info filters this data down to the most recent 20 years and uses some clever statistics
                        to
                        make
                        new data from
                        the stock market data it already has. It computes whether key stocks
                        fell on the previous day, days in a row that a stock has been going up or down, and the
                        proportion
                        of
                        the closing price each day over the average closing price over the last 20 years.
                    </li>
                    <li className="li-bio">
                        Then, 500Info uses a Machine Learning model to predict whether the S&P 500 will go up or down
                        the
                        next
                        day. It's like a magic 8-ball, but
                        with a lot more math and data.
                    </li>
                    <li className="li-bio">
                        Finally, 500Info delivers those predictions to you, the user, in a simple, easy-to-understand
                        format.
                    </li>
                </ol>
                <h3 className="h3-bio"><strong>Now, let's take a look at another Machine Learning Feature 500Info
                    offers:</strong> Intelligent
                    News
                    Analysis!</h3>
                <p className="p-bio">Intelligent News Analysis uses an Artificial Intelligence to classify today's stock
                    news as good or bad.
                    It
                    works like this:</p>
                <ol>
                    <li className="li-bio">It uses a "news scraper" bot, or a special computer program that can retrieve
                        elements from any
                        webpage
                        open to the public. After hearing that, you might be asking, <strong>"Is this
                            legal?"</strong> The
                        answer is yes, news scraping is legal is long
                        as what you're scraping can be accessed by anyone on the internet. And, with that out of the
                        way,
                        the
                        scraper bot retrieves the titles of articles published on the homepages of popular market news
                        sites.
                    </li>
                    <li className="li-bio">
                        Next, the scraper bot hands off its findings to a data cleaner, which cleans any stray
                        characters or
                        unwanted text from the article titles.
                    </li>
                    <li className="li-bio">
                        Then, the data cleaner gives the freshly cleaned headlines to an Artificial Intelligence model,
                        which
                        first throws out the stories not related to the market, then classifies the rest as good or bad
                        for
                        stock prices. Good stories are 1s, and bad stories
                        are 0s. Remember that, as it'll be important in the next step.
                    </li>
                    <li className="li-bio">The model's predictions then go through some statistical prep. Another
                        computer program finds the
                        mean,
                        or the average, of all the values the model predicted. For example, if the model gave the mean
                        finder a
                        1 and a 0, it would output 0.5.
                    </li>
                    <li className="li-bio">Finally, another computer program interprets the average. If it's over a
                        certain number, the
                        interpreter
                        concludes that the news is pretty likely to be positive. If not, the interpreter concludes that
                        it's
                        likely to be neutral or negative about the market.
                    </li>
                </ol>
                <h3 className="h3-bio"><strong>Analyze Feature</strong></h3>
                <p className="p-bio">Analyze is a tool that allows users to create their own graphs and statistics
                    concerning the stock
                    market.
                    It's a lot simpler on the technical side: all it does is call a built-in library (see stock
                    prediction
                    above) to create graphs, and runs functions, which are sort of like tasks for computers, to
                    calculate
                    statistics. Although much simpler, it too is a vital part of what makes 500Info tick.
                </p>
                <h1 className="credits">Credits</h1>
                <h2><em>Key</em></h2>
                <p>Front End- Web Page design</p>
                <p>Back End- Programs that run behind the scenes</p>
                <p>Machine Learning- Programs that learn from data</p>
                <h2><em>People</em></h2>
                <p>Ethan Himmell</p>
                <p><em>Lead Developer</em> | Front End, Back End, Machine Learning</p>
            </div>
        </div>
    );
}

export function Pitch() {
    return (
        <div className="bio-pitch">
            <h1 className="h1-bio">About</h1>
            <p><strong>500<em>Info</em> is a web application that uses Artificial Intelligence, Machine Learning, and
                Statistics
                to make predictions and metrics about
                all things stock related.</strong></p>
        </div>);
}