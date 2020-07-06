import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {RootStateType} from "./redux/StoreTypes";
import store from "./redux/redux";
import {Provider} from "react-redux";

const __root__ = document.getElementById('root');

let state: RootStateType = store.getState();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </Provider>
    </React.StrictMode>,
    __root__
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();