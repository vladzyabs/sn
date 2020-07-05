import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {RootStateType} from "./redux/StoreTypes";
import store from "./redux/redux";

const __root__ = document.getElementById('root');

let state = store.getState();

export const rerender = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        __root__
    );
};

rerender(state);
store.subscribe(() => {
    rerender(store.getState())
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();