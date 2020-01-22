import { createStore, combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import personeReducer from './person/personeReducer';

const rootReducer = combineReducers({
    'cakeReducer': cakeReducer, 
    'personeReducer': personeReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store