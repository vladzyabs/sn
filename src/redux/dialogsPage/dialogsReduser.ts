import {ADD_MESSAGE, INPUT_NEW_MESSAGE} from "./dialogsAction";
import {v1} from "uuid";
import {DialogsPageActionType} from "./dialogsAction";

let initialState = {
    chats: [
        {id: v1(), name: 'Marina'},
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

export type InitialStateType = typeof initialState

const dialogReducer = (state: InitialStateType = initialState, action: DialogsPageActionType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessage.trim()) {
                return {
                    ...state,
                    newMessage: '',
                    messages: [...state.messages, {id: v1(), message: state.newMessage.trim(), fromMe: true}]
                };
            } else return {...state, newMessage: ''};
        case INPUT_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.newMessage
            };
        default:
            return state;
    }
};

export default dialogReducer