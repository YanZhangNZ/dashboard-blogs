import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
//when i import {rootReducer}, error happens saying attempted import error;
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

//combine reducers with provider
//apply middleware thunk
const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady:true})
        )
    );
//not render to the DOM until auth is ready
store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
        <Provider store={store}><App /></Provider>, 
        document.getElementById('root')
    );
})

