import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./components/App"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// <Route exact path='/new' component={NewApartment} />
