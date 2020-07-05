import React from "react";
import style from "./Dialogs.module.scss";
import Messages from "./Messages";
import Chats from "./Chats";
import {DialogsType} from "../../redux/StoreTypes";

type PropsDialogsType = {
    dialogsData: DialogsType,
    dispatch: any
}

function Dialogs(props: PropsDialogsType) {

    return (
        <div className={style.dialogs}>
            <h1 className={style.dialogsTitle}>Dialogs</h1>
            <div className={style.content}>

                <Chats chats={props.dialogsData.chats}/>

                <Messages messages={props.dialogsData.messages}
                          newMessage={props.dialogsData.newMessage}
                          dispatch={props.dispatch}/>

            </div>
        </div>
    )
}



export default Dialogs