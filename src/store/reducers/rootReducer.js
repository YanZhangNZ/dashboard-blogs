import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

//combine reducers into one
const rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer,
    firebase:firebaseReducer,//for authentication
    firestore:firestoreReducer//for data
})

export default rootReducer;