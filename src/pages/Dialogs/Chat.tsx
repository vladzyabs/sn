import React from "react";
import style from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import {paths} from "../../layout/paths";

type PropsChatType = {
    id: string,
    name: string,
}

function Chat(props: PropsChatType) {
    return (
        <div className={style.chat}>
            <NavLink to={`${paths.dialogs}/${props.id}`}
                     className={style.chatLink}
                     activeClassName={style.activeChatLink}>{props.name}</NavLink>
        </div>
    )
}

export default React.memo(Chat)

