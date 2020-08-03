import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


//NYT Api doesn't handle interceptors
// axios.interceptors.request.use(
// 	function (config) {
// 		config.headers['api-key'] = process.env.REACT_APP_CARPE_DIEM_NYT;
// 		return config;
// 	},
// 	function (error) {
// 		return Promise.reject(error);
// 	}
// );


ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
