import {v1} from "uuid";

// profile type
export type PostsType = {
    id: string
    message: string
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
export type RootStateType = {
    profileData: ProfileType
    dialogsData: DialogsType
}
export type RootStoreType = {
    _state: RootStateType
    getState: ()=>RootStateType
    dispatch: any
    _inputNewPost: (newPost: string)=>void
    _addPost: ()=>void
    _addMessage: ()=>void
    _inputNewMessage: (newMessage: string)=>void
    _callSubscriber: (state: RootStateType) => void
    subscriber: (observer: (state: RootStateType) => void) => void
}

export let store: RootStoreType = {

    _state: {
        profileData: {
            posts: [
                {id: v1(), message: 'post 1', countLike: 5},
                {id: v1(), message: 'post 2', countLike: 1},
                {id: v1(), message: 'post 3', countLike: 13},
                {id: v1(), message: 'post 4', countLike: 2},
                {id: v1(), message: 'post 5', countLike: 8},
                {id: v1(), message: 'post 6', countLike: 17},
                {id: v1(), message: 'post 7', countLike: 20},
            ],
            newPosts: '',
        },
        dialogsData: {
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
        },
    },
    getState() {return this._state},
    dispatch(action: any) {
        switch (action.type) {
            case 'ADD_POST':
                this._addPost();
                break;
            case 'INPUT_NEW_POST':
                this._inputNewPost(action.newPost);
                break;
            case 'ADD_MESSAGE':
                this._addMessage();
                break;
            case 'INPUT_NEW_MESSAGE':
                this._inputNewMessage(action.newMessage);
                break;
            default: return this._state
        }
    },

    _inputNewPost(newPost) {
        this._state.profileData.newPosts = newPost;
        this._callSubscriber(this._state);
    },
    _addPost() {
        this._state.profileData.posts.push(
            {id: v1(), message: this._state.profileData.newPosts, countLike: 0}
        );
        this._inputNewPost('');
        this._callSubscriber(this._state);
    },

    _addMessage() {
        this._state.dialogsData.messages.push(
            {id: v1(), message: this._state.dialogsData.newMessage, fromMe: true}
        );
        this._inputNewMessage('');
        this._callSubscriber(this._state)
    },
    _inputNewMessage(newMessage) {
        this._state.dialogsData.newMessage = newMessage;
        this._callSubscriber(this._state);
    },

    _callSubscriber(state: RootStateType) {},
    subscriber(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },
};
