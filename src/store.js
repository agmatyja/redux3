import { createStore } from 'redux';
import reducers from './reducers.js';

const store = createStore(reducers);

var unsubscibe = store.subscribe(() => console.log('zmiana w stanie'));
unsubscribe();

store.subscribe(() => console.log(store.getState()));

store.dispatch(addComment('pierwszy komentarz'))
store.dispatch(addComment('drugi komentarz'));