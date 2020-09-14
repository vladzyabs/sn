import profileReducer from './profileReducer';
import { v1 } from 'uuid';
import * as action from './profileAction';
import { ProfileInfoType, ProfileStateType } from './profileType';

let initialState: ProfileStateType
let id1 = v1()
let id2 = v1()
let id3 = v1()

beforeEach(() => {
   initialState = {
      posts: [
         {id: id1, postValue: 'post 1', countLike: 1},
         {id: id2, postValue: 'post 2', countLike: 2},
         {id: id3, postValue: 'post 3', countLike: 3},
      ],
      profileInfo: null,
      status: '',
   }
})

test('new post should be added', () => {
   const endState: ProfileStateType = profileReducer(initialState, action.actionAddPost('new post'))

   expect(endState.posts.length).toBe(4)
   expect(endState.posts[0].postValue).toBe('new post')
   expect(endState.posts[0].countLike).toBe(0)
})

test('like post should be added', () => {
   const endState: ProfileStateType = profileReducer(initialState, action.actionAddLikePost(id1))

   const post = endState.posts.find(post => post.id === id1)
   expect(post && post.countLike).toBe(2)
})

test('status must be set', () => {
   const endState: ProfileStateType = profileReducer(initialState, action.actionSetStatus('status'))

   expect(endState.status).toBe('status')
})

test('user information must be set', () => {
   const userInfo: ProfileInfoType = {
      userId: 1,
      lookingForAJob: true,
      lookingForAJobDescription: 'string',
      fullName: 'string',
      aboutMe: 'string',
      contacts: {
         github: 'string',
         vk: 'string',
         facebook: 'string',
         instagram: 'string',
         twitter: 'string',
         website: 'string',
         youtube: 'string',
         mainLink: 'string',
      },
      photos: {
         small: 'string',
         large: 'string',
      },
   }
   const endState: ProfileStateType = profileReducer(initialState, action.actionSetUserInfo(userInfo))

   expect(endState.profileInfo).toBeDefined()
   expect(endState.profileInfo && endState.profileInfo.userId).toBe(1)
})

test('post should be deleted', () => {
   const endState: ProfileStateType = profileReducer(initialState, action.actionDeletePost(id1))

   expect(endState.posts.length).toBe(2)
   expect(endState.posts[0].id).toBe(initialState.posts[1].id)
   expect(endState.posts[1].id).toBe(initialState.posts[2].id)
})
