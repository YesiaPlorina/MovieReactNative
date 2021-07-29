import {applyMiddleware, createStore} from 'redux';

import reducer from './reducer/index';
import thunk from 'redux-thunk';

let middlewares = applyMiddleware(thunk);

export const store = createStore(reducer, middlewares);