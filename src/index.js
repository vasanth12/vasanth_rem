import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import "semantic-ui-css/semantic.min.css";
import registerServiceWorker from './registerServiceWorker';
import rootreducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoggedIn } from './actions/auth';


const store = createStore(
  rootreducer, composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.bookwormJWT){
  const user = { token: localStorage.bookwormJWT };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
