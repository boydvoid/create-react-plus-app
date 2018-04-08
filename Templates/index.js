module.exports = `import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import provide and store
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
//wrap your app in a provider with the store
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();`
