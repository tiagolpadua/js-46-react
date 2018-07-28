import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function tweetsReducer(state = [], action = {}) {
  if (action.type === 'CARREGA_TWEETS') {
    state = action.tweets;
  }

  if (action.type === 'ADICIONA_TWEET') {
    state = [action.novoTweet, ...state];
  }

  if (action.type === 'REMOVE_TWEET') {
    const listaDeTweetsAtualizada = state.filter(
      tweet => tweet._id !== action.idTweetQueVaiSerRemovido
    );
    state = listaDeTweetsAtualizada;
  }

  return state;
}
const store = createStore(tweetsReducer, applyMiddleware(thunk));
console.log(`Primeira versão da store:`, store.getState());
export default store;
