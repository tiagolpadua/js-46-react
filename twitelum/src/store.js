import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function tweetsReducer(state = [], action = {}) {
  if (action.type === 'CARREGA_TWEETS') {
    state = action.tweets;
  }

  if (action.type === 'ADICIONA_TWEET') {
    state = [action.novoTweet, ...state];
  }

  return state;
}
const store = createStore(tweetsReducer, applyMiddleware(thunk));
console.log(`Primeira versão da store:`, store.getState());
export default store;
