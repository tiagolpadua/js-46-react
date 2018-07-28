import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function tweetsReducer(state = [], action = {}) {
  if (action.type === 'CARREGA_TWEETS') {
    state = action.tweets;
  }
  return state;
}
const store = createStore(tweetsReducer, applyMiddleware(thunk));
console.log(`Primeira versão da store:`, store.getState());
export default store;
