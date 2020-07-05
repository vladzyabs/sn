import React from "react";
import {HashRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {RootStateType} from "./redux/StoreTypes";

import './style/App.scss';

type PropsAppType = {
    state: RootStateType
    dispatch: any
}

function App(props: PropsAppType) {
    return (
        <HashRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Main dialogsData={props.state.dialogsData}
                      profileData={props.state.profileData}
                      dispatch={props.dispatch}/>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App