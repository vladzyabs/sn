import {
   ADD_LIKE_POST,
   ADD_POST,
   DELETE_POST,
   ProfileStateType, SET_PHOTO_LOADING,
   SET_STATUS,
   SET_USER_INFO,
   SET_USER_PHOTO,
} from './profileType'
import {v1} from 'uuid'
import {ProfilePageActionType} from './profileAction'

let initialState: ProfileStateType = {
   posts: [
      {id: v1(), postValue: 'post 1', countLike: 5},
      {id: v1(), postValue: 'post 2', countLike: 1},
      {id: v1(), postValue: 'post 3', countLike: 13},
      {id: v1(), postValue: 'post 4', countLike: 2},
      {id: v1(), postValue: 'post 5', countLike: 8},
      {id: v1(), postValue: 'post 6', countLike: 17},
      {id: v1(), postValue: 'post 7', countLike: 20},
   ],
   status: '',
   profileInfo: null,
   photoLoading: false,
}

const profileReducer = (state = initialState, action: ProfilePageActionType): ProfileStateType => {
   switch (action.type) {
      case SET_USER_INFO:
         return {
            ...state,
            profileInfo: action.preloader,
         }
      case ADD_POST:
         if (action.value) {
            return {
               ...state,
               posts: [{id: v1(), postValue: action.value.trim(), countLike: 0}, ...state.posts],
            }
         } else return {...state}
      case DELETE_POST:
         return {...state, posts: state.posts.filter(p => p.id !== action.postID)}
      case ADD_LIKE_POST:
         let index = state.posts.findIndex(post => post.id === action.idPost)
         return {
            ...state,
            posts: state.posts.map(post => {
               if (post.id === action.idPost) {
                  return {...post, countLike: state.posts[index].countLike + 1}
               }
               return post
            }),
         }
      case SET_STATUS:
         return {
            ...state,
            status: action.status,
         }
      case SET_USER_PHOTO:
         return {
            ...state,
            //@ts-ignore
            profileInfo: {
               ...state.profileInfo,
               photos: {
                  small: action.small,
                  large: action.large,
               },
            },
         }
      case SET_PHOTO_LOADING:
         return {
            ...state,
            photoLoading: action.value,
         }
      default:
         return state
   }
}

export default profileReducer
