import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import './index.css';

//ReactDOM.render is no longer supported in React 18
//const container = document.getElementById('app'); 
//const root = createRoot(container); 
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);

