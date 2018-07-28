import { connect } from 'react-redux';
import * as TweetsAPI from '../api/TweetsAPI';
import Tweet from '../components/Tweet';
// Ajustando o Container Component
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = (dispatch, propsRecebidas) => {
  return {
    removeHandler: () => {
      dispatch(TweetsAPI.remove(propsRecebidas.tweetInfo._id));
    },
    likeHandler: () => {
      dispatch(TweetsAPI.like(propsRecebidas.tweetInfo._id));
    }
  };
};

const TweetPadraoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tweet);

export default TweetPadraoContainer;
