import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import swDev from './swDev';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPWAInstallProvider from 'react-pwa-install';

ReactDOM.render(
  <ReactPWAInstallProvider enableLogging>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ReactPWAInstallProvider>,
  document.getElementById('root')
);
swDev();

