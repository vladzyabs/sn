export const ADD_MESSAGE = 'ADD_MESSAGE'

type actionAddMessageType = { type: typeof ADD_MESSAGE, value: string }
export const actionAddMessage = (value: string): actionAddMessageType => {
   return {
      type: ADD_MESSAGE,
      value,
   }
}

export type DialogsPageActionType =
   actionAddMessageType
