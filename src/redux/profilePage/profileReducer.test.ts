import profileReducer, {InitialStateType} from "./profileReducer";
import {v1} from "uuid";
import * as action from "./profileAction";

let initialState: InitialStateType

beforeEach(() => {
    initialState = {
        posts: [
            {id: v1(), postValue: 'post 1', countLike: 1},
            {id: v1(), postValue: 'post 2', countLike: 2},
            {id: v1(), postValue: 'post 3', countLike: 3},
        ],
        newPosts: ''
    }
})

test('', () => {
    let newState
    let newPost = '  post 4  '

    newState = profileReducer(initialState, action.actionInputNewPost(newPost))
    expect(newState.newPosts).toBe(newPost)

    newState = profileReducer(newState, action.actionAddPost())
    expect(newState.newPosts).toBe('')
    expect(newState.posts.length).toBe(initialState.posts.length + 1)
    expect(newState.posts[0].postValue).toBe(newPost.trim())
    expect(newState.posts[0].countLike).toBe(0)
})