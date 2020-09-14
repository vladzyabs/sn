import {
   UsersPageActionType,
} from './usersAction'
import { UsersStateType } from './usersType'

let initialState: UsersStateType = {
   users: [],
   pageSize: 10,
   totalCount: 0,
   currentPage: 1,
   isLoading: false,
   followingInProgress: [],
};

const usersReducer = (state = initialState, action: UsersPageActionType): UsersStateType => {
   switch (action.type) {
      case 'FOLLOW_USER':
         return {
            ...state,
            users: state.users.map(user => {
               if (action.userID === user.id) {
                  return {...user, followed: true}
               }
               return user
            }),
         }
      case 'UNFOLLOW_USER':
         return {
            ...state,
            users: state.users.map(user => {
               if (action.userID === user.id) {
                  return {...user, followed: false}
               }
               return user
            }),
         }
      case 'SET_USERS':
         return {...state, users: action.users}
      case 'SET_CURRENT_PAGE':
         return {...state, currentPage: action.page}
      case 'SET_TOTAL_USERS_COUNT':
         return {...state, totalCount: action.count}
      case 'SET_LOADING':
         return {...state, isLoading: action.payload}
      case 'TOGGLE_FOLLOWING_PROGRESS':
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [action.userID, ...state.followingInProgress]
               : state.followingInProgress.filter(id => id !== action.userID),
         }
      default:
         return state
   }
}

export default usersReducer
