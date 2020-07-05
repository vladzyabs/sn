import React from "react";
import style from "./Dialogs.module.scss";
import Chat from "./Chat"
import {ChatsType} from "../../redux/StoreTypes";

type PropsChatsType = {
    chats: Array<ChatsType>
}

function Chats(props: PropsChatsType) {

    const returnChats = props.chats.map((item) => {
        return <Chat key={item.id} id={item.id} name={item.name}/>
    })

    return (
        <div className={style.chats}>

            {returnChats}

        </div>
    )
}

export default Chats

