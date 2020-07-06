import React from "react";
import style from "./Dialogs.module.scss";
import Chats from "./Chats";
import {DialogsType} from "../../redux/StoreTypes";
import MessagesContainer from "./MessagesContainer";

type PropsDialogsType = {
    dialogsData: DialogsType
}

function Dialogs(props: PropsDialogsType) {

    return (
        <div className={style.dialogs}>
            <h1 className={style.dialogsTitle}>Dialogs</h1>
            <div className={style.content}>

                <Chats chats={props.dialogsData.chats}/>
                
                <MessagesContainer/>

            </div>
        </div>
    )
}



export default Dialogs