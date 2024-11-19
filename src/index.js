import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <App />
          <Toaster
            toastOptions={{
              position: 'top-right',
              style: {
                background: '#283046',
                color: 'white',
              },
            }}
          />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
