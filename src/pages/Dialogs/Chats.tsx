import React from "react";
import style from "./Dialogs.module.scss";
import Chat from "./Chat"
import {RootStateType} from "../../redux/rootStore";
import {connect} from "react-redux";
import {ChatsType} from "../../redux/dialogsPage/dialogsType";

type PropsChatsType = {
    chats: ChatsType[]
}

function Chats(props: PropsChatsType) {

    const returnChats = props.chats.map((item) => {
        return <Chat key={item.id} id={item.id} name={item.name}/>
    });

    return (
        <div className={style.chats}>

            {returnChats}

        </div>
    )
}

const mstp = (state: RootStateType) => {
    return {
        chats: state.dialogsData.chats
    }
}

const connector = connect(mstp)

export default connector(Chats)

