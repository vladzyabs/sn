export const ADD_MESSAGE = 'ADD_MESSAGE';
export const INPUT_NEW_MESSAGE = 'INPUT_NEW_MESSAGE';

type actionAddMessageType = {type: typeof ADD_MESSAGE}
export const actionAddMessage = (): actionAddMessageType => {
    return {
        type: ADD_MESSAGE,
    }
};

type ActionInputNewMessageType = {type: typeof INPUT_NEW_MESSAGE, newMessage: string}
export const actionInputNewMessage = (newMessage: string): ActionInputNewMessageType => {
    return {
        type: INPUT_NEW_MESSAGE,
        newMessage,
    }
};

export type DialogsPageActionType =
    actionAddMessageType
    | ActionInputNewMessageType