import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho';
import NavMenu from '../../components/NavMenu';
import Dashboard from '../../components/Dashboard';
import Widget from '../../components/Widget';
import TrendsArea from '../../components/TrendsArea';
import Tweet from '../../components/Tweet';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      novoTweet: '',
      tweets: []
    };
    this.adicionaTweet = this.adicionaTweet.bind(this);
    this.getTweets = this.getTweets.bind(this);
  }

  adicionaTweet(event) {
    event.preventDefault();
    const novoTweet = this.state.novoTweet;
    const tweetsAntigos = this.state.tweets;
    if (novoTweet) {
      this.setState({
        tweets: [novoTweet, ...tweetsAntigos],
        novoTweet: ''
      });
    }
  }

  getTweets() {
    if (this.state.tweets.length > 0) {
      return this.state.tweets.map((tweetInfo, index) => (
        <Tweet key={tweetInfo + index} texto={tweetInfo} />
      ));
    } else {
      return <span>Crie um Tweet!</span>;
    }
  }

  render() {
    let tweets;
    if (this.state.tweets.length > 0) {
      tweets = this.state.tweets.map((tweetInfo, index) => (
        <Tweet key={tweetInfo + index} texto={tweetInfo} />
      ));
    } else {
      tweets = <span>Crie um Tweet!</span>;
    }

    return (
      <Fragment>
        <Cabecalho>
          <NavMenu usuario="@omariosouto" />
        </Cabecalho>
        <div className="container">
          <Dashboard>
            <Widget>
              <form className="novoTweet" onSubmit={this.adicionaTweet}>
                <div className="novoTweet__editorArea">
                  <span
                    className={`
																	novoTweet__status
																	${this.state.novoTweet.length > 140 ? 'novoTweet__status--invalido' : ''}
													`}
                  >
                    {this.state.novoTweet.length}/140
                  </span>
                  <textarea
                    className="novoTweet__editor"
                    value={this.state.novoTweet}
                    onInput={event =>
                      this.setState({ novoTweet: event.target.value })
                    }
                    placeholder="O que está acontecendo?"
                  />
                </div>
                <button
                  className="novoTweet__envia"
                  disabled={this.state.novoTweet.length > 140 ? true : false}
                  type="submit"
                >
                  Tweetar
                </button>
              </form>
            </Widget>
            <Widget>
              <TrendsArea />
            </Widget>
          </Dashboard>
          <Dashboard posicao="centro">
            <Widget>
              <div className="tweetsArea">
                {tweets}
                {/* {this.getTweets()} */}
                {/* {this.state.tweets.length > 0 ? (
                  this.state.tweets.map((tweetInfo, index) => (
                    <Tweet key={tweetInfo + index} texto={tweetInfo} />
                  ))
                ) : (
                  <span>Crie um Tweet!</span>
                )} */}
              </div>
            </Widget>
          </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default Home;
