/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import CustomerListPage from './CustomerListPage';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CustomerListPage />, document.getElementById('root'));
registerServiceWorker();
