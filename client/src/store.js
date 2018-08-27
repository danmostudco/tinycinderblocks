import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

// import root reducer
import rootReducer from './reducers/index';

// create history object
export const history = createBrowserHistory();

// middleware
const middleware = [
    thunk,
    routerMiddleware(history)
]

// enhancers
const enhancers = [];

// push dev tools to enhancers array if in dev
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

// compose middleware and enhancers
const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

// create an object for the default state
const defaultState = {
}

const store = createStore(
    connectRouter(history)(rootReducer),
    defaultState,
    composedEnhancers
);

export default store;

