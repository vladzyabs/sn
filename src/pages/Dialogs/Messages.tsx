import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Dialogs.module.scss";
import Message from "./Message";
import Icon, {iconsName, iconsPrefix} from "../../components/Icon/Icon";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/rootStore";
import {actionAddMessage, actionInputNewMessage} from "../../redux/dialogsPage/dialogsAction";
import {MessagesType} from "../../redux/dialogsPage/dialogsType";

type PropsMessagesType = {
    messages: MessagesType[]
    newMessage: string
    addMessage: () => void
    inputNewMessage: (value: string) => void
}

function Messages(props: PropsMessagesType) {

    const buttonOnClick = () => {
        props.addMessage()
    };
    const textareaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.inputNewMessage(e.currentTarget.value)
    };
    const textareaOnKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
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
                        onClick={buttonOnClick}>Send<Icon prefix={iconsPrefix.fas} iconName={iconsName.paperPlane}
                                                          size={'sm'}/></button>

            </div>
        </div>
    )
}

const mstp = (state: RootStateType) => {
    return {
        messages: state.dialogsData.messages,
        newMessage: state.dialogsData.newMessage,
    }
};

const mdtp = {
    addMessage: () => (actionAddMessage()),
    inputNewMessage: (value: string) => (actionInputNewMessage(value)),
};

const connector = connect(mstp, mdtp);

export default connector(Messages)