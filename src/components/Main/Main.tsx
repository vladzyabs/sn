import React from "react";
import {Switch, Route} from "react-router-dom";
import {paths} from "../../layout/paths";
import style from "./Main.module.scss";
import ProfileContainer from "../../pages/Profile/ProfileContainer";
import Dialogs from "../../pages/Dialogs/Dialogs";
import Settings from "../../pages/Settings/Settings";
import UsersContainer from "../../pages/Users/UsersContainer";
import News from "../../pages/News/News";
import Music from "../../pages/Music/Music";
import {NotFound} from "../../pages/NotFound/NotFound";
import Login from "../../pages/Login/Login";

type PropsMainType = {}

function Main(props: PropsMainType) {
    return (
        <main className={style.main}>
            <Switch>
                <Route path={paths.main} exact><Login/></Route>
                <Route path={paths.profileWithId}><ProfileContainer/></Route>
                <Route path={paths.users}><UsersContainer/></Route>
                <Route path={paths.dialogs}><Dialogs/></Route>
                <Route path={paths.news}><News/></Route>
                <Route path={paths.music}><Music/></Route>
                <Route path={paths.settings}><Settings/></Route>
                <Route path={paths.login}><Login/></Route>
                <Route component={NotFound}/>
            </Switch>
        </main>
    )
}

export default Main