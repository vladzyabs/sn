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
    chats: ChatsType[]
    messages: MessagesType[]
    newMessage: string
}