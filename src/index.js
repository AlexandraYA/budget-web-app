import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/grid.css';
import './assets/style/icheck-form.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './store/rootReducer';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

const application = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
