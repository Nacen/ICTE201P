import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import {robots} from './robots.js';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
                <CardList robots = { robots }/>
                , 
    document.getElementById('root'));
registerServiceWorker();
