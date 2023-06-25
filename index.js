import React from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './Client/App';

const root = createRoot(document.getElementById('contents'));
root.render(
  <Provider store={store}>
    <App />
  </Provider> // need to create a store in reducers
)