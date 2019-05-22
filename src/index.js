import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import 'firebase/auth'


const store = createStore(rootReducer,{}, applyMiddleware(thunk))
debugger;

ReactDOM.render(
<Provider store={store}>
        <App />
</Provider>, 
document.getElementById('root'));
