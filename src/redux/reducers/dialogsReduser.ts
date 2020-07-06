import constants from "../constants";
import {v1} from "uuid";
import {DialogsType} from "../StoreTypes";

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

type dialogReducerType = (state: DialogsType, action: DialogsPageActionType) => DialogsType
const dialogReducer: dialogReducerType = (state = initialState, action): DialogsType => {
    switch (action.type) {
        case constants.ADD_MESSAGE:
            if (state.newMessage.trim()) {
                return {
                    ...state,
                    newMessage: '',
                    messages: [...state.messages, {id: v1(), message: state.newMessage, fromMe: true}]
                };
            } else return state;
        case constants.INPUT_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.newMessage || ''
            };
        default:
            return state;
    }
};

export const actionAddMessage = () => {
    return {
        type: constants.ADD_MESSAGE
    }
};

export const actionInputNewMessage = (newMessage: string) => {
    return {
        type: constants.INPUT_NEW_MESSAGE,
        newMessage,
    }
};

export type DialogsPageActionType =
    ReturnType<typeof actionAddMessage>
    | ReturnType<typeof actionInputNewMessage>
    | any

export default dialogReducer