import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// import react router deps
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import redux items
import { Provider } from 'react-redux';
import store, { history } from './store';
import { ConnectedRouter } from 'connected-react-router';

const router = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App}></Route>
        </ConnectedRouter>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
