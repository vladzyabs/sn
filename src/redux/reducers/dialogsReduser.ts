import constants from "../constants";
import {v1} from "uuid";
import {DialogsType} from "../StoreTypes";
import {ActionType} from "./ActionType";

let initialState: DialogsType = {
    chats: [
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Vlad'},
        {id: v1(), name: 'Liza'},
        {id: v1(), name: 'Masha'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Dasha'},
    ],
    newMessage: '',
    messages: [
        {id: v1(), message: 'Hi', fromMe: false},
        {id: v1(), message: 'how are you?', fromMe: false},
        {id: v1(), message: 'Hello', fromMe: true},
        {id: v1(), message: 'I feel happy', fromMe: true},
        {id: v1(), message: 'What do you do?', fromMe: false},
        {id: v1(), message: 'I learn ReactJS', fromMe: true},
    ],
};

type dialogReducerType = (state: DialogsType, action: ActionType) => DialogsType
const dialogReducer: dialogReducerType = (state = initialState, action) => {

    type addMessageType = () => void
    const _addMessage: addMessageType = () =>{
        const newMessageText = {id: v1(), message: state.newMessage, fromMe: true};
        if (state.newMessage.trim()) {
            state.messages = [...state.messages, newMessageText]
        }
        _inputNewMessage('');
    };

    type inputNewMessageType = (newMessage: string) => void
    const _inputNewMessage: inputNewMessageType = (newMessage) => {
            state.newMessage = newMessage;
    };

    switch (action.type) {
        case constants.ADD_MESSAGE:
            _addMessage();
            return state;
        case constants.INPUT_NEW_MESSAGE:
            _inputNewMessage(action.newMessage);
            return state;
        default:
            return state;
    }
};

export type actionAddMessageType = {
    type: typeof constants.ADD_MESSAGE
}
export const actionAddMessage = (): actionAddMessageType => {
    return {
        type: constants.ADD_MESSAGE
    }
};

export type actionInputNewMessageType = {
    type: typeof constants.INPUT_NEW_POST
    newMessage: string
}
export const actionInputNewMessage = (newMessage: string): actionInputNewMessageType => {
    return {
        type: constants.INPUT_NEW_MESSAGE,
        newMessage,
    }
};

export default dialogReducer