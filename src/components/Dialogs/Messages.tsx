import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.scss";
import Message from "./Message";
import {actionAddMessage, actionInputNewMessage} from "../../redux/reducers/dialogsReduser";
import Icon, {iconsName, iconsPrefix} from "../Icon/Icon";
import {MessagesType} from "../../redux/StoreTypes";

type PropsMessagesType = {
    messages: Array<MessagesType>,
    newMessage: string
    dispatch: any
}

function Messages(props: PropsMessagesType) {

    const buttonOnClick = () => {
        props.dispatch(actionAddMessage())
    };

    const textareaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        props.dispatch(actionInputNewMessage(e.currentTarget.value))
    };
    const textareaOnKeyPress = (e: any) => {
        if (e.charCode === 13) {
            buttonOnClick()
        }
    };

    return (
        <div className={style.messages}>
            <div className={style.messageWrapper}>

                {props.messages.map((item) => {
                    return <Message key={item.id} id={item.id} message={item.message} fromMe={item.fromMe}/>
                })}

            </div>
            <div className={style.addMessage}>

                <span>New message:</span>
                <textarea className={style.textarea}
                          value={props.newMessage}
                          onChange={textareaOnChange}
                          onKeyPress={textareaOnKeyPress}/>
                <button className={style.button}
                        onClick={buttonOnClick}>Send<Icon prefix={iconsPrefix.fas} iconName={iconsName.paperPlane} size={'sm'}/></button>

            </div>
        </div>
    )
}

export default Messages