import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import "semantic-ui-css/semantic.min.css";
import registerServiceWorker from './registerServiceWorker';
import rootreducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
