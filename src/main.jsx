import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Router } from './BrowserRouter.jsx';
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  </Provider>,
);
