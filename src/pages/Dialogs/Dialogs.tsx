import React from "react";
import style from "./Dialogs.module.scss";
import Chats from "./Chats";
import Messages from "./Messages";

type PropsDialogsType = {}

function Dialogs(props: PropsDialogsType) {
    return (
        <div className={style.dialogs}>
            <h1 className={style.dialogsTitle}>Dialogs</h1>
            <div className={style.content}>

                <Chats />

                <Messages />

            </div>
        </div>
    )
}


export default Dialogs