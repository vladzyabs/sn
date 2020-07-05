import React from "react";
import {Switch, Route} from "react-router-dom";
import {paths} from "../../layout/paths";
import style from "./Main.module.scss";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import Settings from "../Settings/Settings";
import Users from "../Users/Users";
import News from "../News/News";
import Music from "../Music/Music";
import {NotFound} from "../NotFound/NotFound";
import Login from "../Login/Login";
import {DialogsType, ProfileType} from "../../redux/StoreTypes";

type PropsMainType = {
    profileData: ProfileType
    dialogsData: DialogsType
    dispatch: any
}

function Main(props: PropsMainType) {
    return (
        <main className={style.main}>
            <Switch>
                <Route path={paths.main} exact><Login/></Route>
                <Route path={paths.profile}><Profile profileData={props.profileData}
                                                     dispatch={props.dispatch}/></Route>
                <Route path={paths.users}><Users/></Route>
                <Route path={paths.dialogs}><Dialogs dialogsData={props.dialogsData}
                                                     dispatch={props.dispatch}/></Route>
                <Route path={paths.news}><News/></Route>
                <Route path={paths.music}><Music/></Route>
                <Route path={paths.settings}><Settings/></Route>
                <Route component={NotFound}/>
            </Switch>
        </main>
)
}

export default Main