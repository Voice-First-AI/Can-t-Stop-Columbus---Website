import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));

serviceWorker.unregister();
