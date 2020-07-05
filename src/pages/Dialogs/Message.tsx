import React from "react";
import style from "./Dialogs.module.scss";
import {MessagesType} from "../../redux/StoreTypes";

type PropsMessageType = MessagesType

function Message(props: PropsMessageType) {
    return (
        <div className={props.fromMe ? style.myMessage : style.message}>
            {props.message}
        </div>
    )
}

export default Message