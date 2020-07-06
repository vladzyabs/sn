import React from "react";
import {HashRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import './style/App.scss';

type PropsAppType = {
}

function App(props: PropsAppType) {
    return (
        <HashRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Main/>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App