// import {v1} from "uuid";
// import profileReducer from "./reducers/profileReducer";
// import dialogReducer from "./reducers/dialogsReduser";
// import {RootStoreType} from "./StoreTypes";
//
// let store: RootStoreType = {
//     _state: {
//         profileData: {
//             posts: [
//                 {id: v1(), message: 'post 1', countLike: 5},
//                 {id: v1(), message: 'post 2', countLike: 1},
//                 {id: v1(), message: 'post 3', countLike: 13},
//                 {id: v1(), message: 'post 4', countLike: 2},
//                 {id: v1(), message: 'post 5', countLike: 8},
//                 {id: v1(), message: 'post 6', countLike: 17},
//                 {id: v1(), message: 'post 7', countLike: 20},
//             ],
//             newPosts: '',
//         },
//         dialogsData: {
//             chats: [
//                 {id: v1(), name: 'Sveta'},
//                 {id: v1(), name: 'Vlad'},
//                 {id: v1(), name: 'Liza'},
//                 {id: v1(), name: 'Masha'},
//                 {id: v1(), name: 'Sasha'},
//                 {id: v1(), name: 'Dasha'},
//             ],
//             newMessage: '',
//             messages: [
//                 {id: v1(), message: 'Hi', fromMe: false},
//                 {id: v1(), message: 'how are you?', fromMe: false},
//                 {id: v1(), message: 'Hello', fromMe: true},
//                 {id: v1(), message: 'I feel happy', fromMe: true},
//                 {id: v1(), message: 'What do you do?', fromMe: false},
//                 {id: v1(), message: 'I learn ReactJS', fromMe: true},
//             ],
//         },
//     },
//     getState() {
//         return this._state
//     },
//
//     dispatch(action) {
//         profileReducer(this.getState().profileData, action);
//         dialogReducer(this.getState().dialogsData, action);
//         this._callSubscriber(this.getState())
//     },
//
//     _callSubscriber(state) {},
//     subscriber(observer) {
//         this._callSubscriber = observer
//     },
// };
//
// export default store