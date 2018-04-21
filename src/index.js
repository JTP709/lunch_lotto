import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { 
	createStore,
	applyMiddleware,
	combineReducers,
	compose } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, firebaseReducer, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase';
import { firebaseConfig } from './configs/configs';
import appReducer from './reducers/appReducers'
import App from './components/App';
import initialState from './reducers/initialState';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rrfConfig = {
	userProfile: 'users'
}

firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	appReducer
});

const setInitialState = { devEnvironment_1: { ...initialState } }

const store = createStore(
	rootReducer,
	setInitialState,
	compose(
		applyMiddleware(thunk.withExtraArgument(getFirebase)),
		reactReduxFirebase(firebase, rrfConfig)
	)
);

// const store = createStore(
//   appReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk)
// );

// window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();