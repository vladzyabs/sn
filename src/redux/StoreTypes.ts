import {ActionType} from "./reducers/ActionType";

// profile type
export type PostsType = {
    id: string
    postValue: string
    countLike: number
}
export type ProfileType = {
    posts: Array<PostsType>
    newPosts: string
}

// dialogs type
export type ChatsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
    fromMe: boolean
}
export type DialogsType = {
    chats: Array<ChatsType>
    messages: Array<MessagesType>
    newMessage: string
}

// root
export type DispatchType = (action: ActionType) => void
export type RootStateType = {
    profileData: ProfileType
    dialogsData: DialogsType
}
export type RootStoreType = {
    _state: RootStateType
    getState: () => RootStateType
    dispatch: DispatchType
}
