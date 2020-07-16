import dialogReducer, {InitialStateType} from "./dialogsReduser";
import {v1} from "uuid";
import * as action from "./dialogsAction";

let initialState: InitialStateType

beforeEach(() => {
    initialState = {
        chats: [
            {id: v1(), name: 'Caa'},
            {id: v1(), name: 'Cbb'},
            {id: v1(), name: 'Ccc'},
        ],
        newMessage: '',
        messages: [
            {id: v1(), message: 'Maa', fromMe: false},
            {id: v1(), message: 'Mbb', fromMe: true},
            {id: v1(), message: 'Mcc', fromMe: true},
            {id: v1(), message: 'Mdd', fromMe: false},
        ]
    }
})

test('new message should be added', () => {
    let newState
    let newMessage = '  Mee  '

    newState = dialogReducer(initialState, action.actionInputNewMessage(newMessage))
    expect(newState.newMessage).toBe(newMessage)

    newState = dialogReducer(newState, action.actionAddMessage())
    expect(newState.newMessage).toBe('')
    expect(newState.messages.length).toBe(initialState.messages.length + 1)
    expect(newState.chats.length).toBe(initialState.chats.length)
    expect(newState.messages[newState.messages.length - 1].message).toBe(newMessage.trim())
    expect(newState.messages[newState.messages.length - 1].fromMe).toBe(true)
})