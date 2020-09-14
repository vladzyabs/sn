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
        messages: [
            {id: v1(), message: 'Maa', fromMe: false},
            {id: v1(), message: 'Mbb', fromMe: true},
            {id: v1(), message: 'Mcc', fromMe: true},
            {id: v1(), message: 'Mdd', fromMe: false},
        ]
    }
})

test('new message should be added', () => {
    const endState = dialogReducer(initialState, action.actionAddMessage('new message'))

    expect(endState.messages.length).toBe(initialState.messages.length + 1)
    expect(endState.messages[endState.messages.length - 1].message).toBe('new message')
    expect(endState.messages[endState.messages.length - 1].fromMe).toBe(true)
    expect(endState.chats.length).toBe(initialState.chats.length)
})