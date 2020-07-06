import React from "react";
import {Switch, Route} from "react-router-dom";
import {paths} from "../../layout/paths";
import style from "./Main.module.scss";
import Profile from "../../pages/Profile/Profile";
import Dialogs from "../../pages/Dialogs/Dialogs";
import Settings from "../../pages/Settings/Settings";
import Users from "../../pages/Users/Users";
import News from "../../pages/News/News";
import Music from "../../pages/Music/Music";
import {NotFound} from "../../pages/NotFound/NotFound";
import Login from "../../pages/Login/Login";
import {DialogsType, DispatchType, ProfileType} from "../../redux/StoreTypes";

type PropsMainType = {
    profileData: ProfileType
    dialogsData: DialogsType
    dispatch: DispatchType
}

function Main(props: PropsMainType) {
    return (
        <main className={style.main}>
            <Switch>
                <Route path={paths.main} exact><Login/></Route>
                <Route path={paths.profile}><Profile profileData={props.profileData}/></Route>
                <Route path={paths.users}><Users/></Route>
                <Route path={paths.dialogs}><Dialogs dialogsData={props.dialogsData}/></Route>
                <Route path={paths.news}><News/></Route>
                <Route path={paths.music}><Music/></Route>
                <Route path={paths.settings}><Settings/></Route>
                <Route component={NotFound}/>
            </Switch>
        </main>
)
}

export default Main