import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/Store';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);