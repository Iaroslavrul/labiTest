import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthForm from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AuthForm />, document.getElementById('root'));

serviceWorker.unregister();
