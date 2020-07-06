import _constants from "../constants";


type actionAddMessageType = {type: typeof _constants.ADD_MESSAGE, payload: null}
export const actionAddMessage = (): actionAddMessageType => {
    return {
        type: _constants.ADD_MESSAGE,
        payload: null
    }
};

type ActionInputNewMessageType = {type: typeof _constants.INPUT_NEW_MESSAGE, payload: string}
export const actionInputNewMessage = (newMessage: string): ActionInputNewMessageType => {
    return {
        type: _constants.INPUT_NEW_MESSAGE,
        payload: newMessage,
    }
};

export type DialogsPageActionType =
    actionAddMessageType
    | ActionInputNewMessageType