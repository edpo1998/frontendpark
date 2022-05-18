
// React  
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
// Redux
import reducer from './reducers'
import { Provider } from 'react-redux';
import {createStore, compose} from 'redux';
// Routes
import App from './routes/App';

const initialState ={
  "user":{},
  "message_error":{}
}
// Configuration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

// Render
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );


