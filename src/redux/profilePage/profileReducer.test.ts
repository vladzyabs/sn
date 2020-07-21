// import profileReducer, {InitialStateType} from "./profileReducer";
import {v1} from "uuid";
// import * as action from "./profileAction";
//
// let initialState: InitialStateType
// let id1 = v1()
// let id2 = v1()
// let id3 = v1()
//
// beforeEach(() => {
//     initialState = {
//         posts: [
//             {id: id1, postValue: 'post 1', countLike: 1},
//             {id: id2, postValue: 'post 2', countLike: 2},
//             {id: id3, postValue: 'post 3', countLike: 3},
//         ],
//         newPosts: ''
//     }
// })
//
// test('new post should be added', () => {
//     let newState
//     let newPost = '  post 4  '
//
//     newState = profileReducer(initialState, action.actionInputNewPost(newPost))
//     expect(newState.newPosts).toBe(newPost)
//
//     newState = profileReducer(newState, action.actionAddPost())
//     expect(newState.newPosts).toBe('')
//     expect(newState.posts.length).toBe(initialState.posts.length + 1)
//     expect(newState.posts[0].postValue).toBe(newPost.trim())
//     expect(newState.posts[0].countLike).toBe(0)
// })
//
// test('like post should be added', () => {
//     let newState
//
//     newState = profileReducer(initialState, action.actionAddLikePost(id1))
//
//     expect(newState.posts[0].countLike).toBe(initialState.posts[0].countLike + 1)
//     expect(newState.posts.length).toBe(initialState.posts.length)
// })