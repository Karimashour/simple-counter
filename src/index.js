import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <React.StrictMode>   
        <App />
      </React.StrictMode>
  </Provider>
);
reportWebVitals();