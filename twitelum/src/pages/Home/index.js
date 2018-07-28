import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho';
import NavMenu from '../../components/NavMenu';
import Dashboard from '../../components/Dashboard';
import Widget from '../../components/Widget';
import TrendsArea from '../../components/TrendsArea';
import Tweet from '../../components/Tweet';
import Modal from '../../components/Modal';
import PropTypes from 'prop-types';
import * as TweetsAPI from '../../api/TweetsAPI';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      novoTweet: '',
      tweets: [],
      tweetAtivo: {}
    };
    this.adicionaTweet = this.adicionaTweet.bind(this);
    this.getTweets = this.getTweets.bind(this);
  }

  abreModalParaTweet = (event, IDtweetSelecionado) => {
    const isTweetFooter = event.target.closest('.tweet__footer');
    if (isTweetFooter) return false;
    const tweetSelecionado = this.state.tweets.find(
      tweet => tweet._id === IDtweetSelecionado
    );
    this.setState({
      tweetAtivo: tweetSelecionado
    });
  };

  fechaModal = event => {
    const isModal = event.target.closest('.widget');
    if (!isModal) {
      this.setState({
        tweetAtivo: {}
      });
    }
  };

  componentWillMount() {
    this.context.store.subscribe(() => {
      this.setState({
        tweets: this.context.store.getState()
      });
    });
  }

  componentDidMount() {
    this.context.store.dispatch(TweetsAPI.carrega());
  }

  removeTweet(idTweetQueVaiSerRemovido) {
    this.context.store.dispatch(TweetsAPI.remove(idTweetQueVaiSerRemovido));
  }

  adicionaTweet(event) {
    event.preventDefault();
    this.context.store.dispatch(TweetsAPI.adiciona(this.state.novoTweet));
    this.setState({
      novoTweet: ''
    });
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
                {this.state.tweets.map((tweetInfo, index) => (
                  <Tweet
                    key={tweetInfo._id}
                    removeHandler={event => this.removeTweet(tweetInfo._id)}
                    texto={tweetInfo.conteudo}
                    handleAbreModalParaTweet={event =>
                      this.abreModalParaTweet(event, tweetInfo._id)
                    }
                    tweetInfo={tweetInfo}
                  />
                ))}
              </div>
            </Widget>
          </Dashboard>
        </div>
        <Modal
          fechaModal={this.fechaModal}
          isAberto={!!this.state.tweetAtivo._id}
        >
          <Widget>
            <Tweet
              key={this.state.tweetAtivo._id}
              removeHandler={event =>
                this.removeTweet(this.state.tweetAtivo._id)
              }
              texto={this.state.tweetAtivo.conteudo || ''}
              tweetInModal={true}
              tweetInfo={this.state.tweetAtivo}
            />
          </Widget>
        </Modal>
      </Fragment>
    );
  }
}

Home.contextTypes = {
  store: PropTypes.object
};

export default Home;
