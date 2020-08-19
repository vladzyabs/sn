import {
   FOLLOW_USER,
   SET_CURRENT_PAGE,
   SET_LOADING,
   SET_TOTAL_USERS_COUNT,
   SET_USERS, TOGGLE_FOLLOWING_PROGRESS,
   UNFOLLOW_USER,
   UserType,
} from './usersType'
import {usersAPI} from '../../api/api'

type ActionFollowUsersType = { type: typeof FOLLOW_USER, userID: number }
export const actionFollowUsers = (userID: number): ActionFollowUsersType => {
   return {
      type: FOLLOW_USER,
      userID,
   }
};

type ActionUnfollowUsersType = { type: typeof UNFOLLOW_USER, userID: number }
export const actionUnfollowUsers = (userID: number): ActionUnfollowUsersType => {
   return {
      type: UNFOLLOW_USER,
      userID,
   }
};

type ActionSetUserType = { type: typeof SET_USERS, users: UserType[] }
export const actionSetUsers = (users: UserType[]): ActionSetUserType => {
   return {
      type: SET_USERS,
      users,
   }
};

type ActionSetCurrentPage = { type: typeof SET_CURRENT_PAGE, page: number }
export const actionSetCurrentPage = (page: number): ActionSetCurrentPage => {
   return {
      type: SET_CURRENT_PAGE,
      page,
   }
}

type ActiolnSetTotalUsersCount = { type: typeof SET_TOTAL_USERS_COUNT, count: number }
export const actionSetTotalUsersCount = (count: number): ActiolnSetTotalUsersCount => {
   return {
      type: SET_TOTAL_USERS_COUNT,
      count,
   }
}

type ActionSetLoading = { type: typeof SET_LOADING, payload: boolean }
export const actionSetLoading = (loading: boolean): ActionSetLoading => {
   return {
      type: SET_LOADING,
      payload: loading,
   }
}

type ToggleFollowingProgress = { type: typeof TOGGLE_FOLLOWING_PROGRESS, isFetching: boolean, userID: number }
export const actionToggleFollowingProgress = (isFetching: boolean, userID: number): ToggleFollowingProgress => {
   return {
      type: TOGGLE_FOLLOWING_PROGRESS,
      isFetching,
      userID,
   }
}

export const thunkGetUser = (currentPage: number, pageSize: number) =>
   (dispatch: any) => {
      dispatch(actionSetLoading(true))
      usersAPI.getUsers(currentPage, pageSize)
         .then(data => {
            dispatch(actionSetUsers(data.items))
            dispatch(actionSetTotalUsersCount(data.totalCount))
            dispatch(actionSetLoading(false))
         })
   }

export const thunkUnfollow = (userID: number) =>
   (dispatch: any) => {
      debugger
      dispatch(actionToggleFollowingProgress(true, userID))
      usersAPI.unfollowUser(userID)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(actionUnfollowUsers(userID))
            }
            dispatch(actionToggleFollowingProgress(false, userID))
         })
   }

export const thunkFollow = (userID: number) =>
   (dispatch: any) => {
      debugger
      dispatch(actionToggleFollowingProgress(true, userID))
      usersAPI.followUser(userID)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(actionFollowUsers(userID))
            }
            dispatch(actionToggleFollowingProgress(false, userID))
         })
   }

export type UsersPageActionType =
   ActionFollowUsersType
   | ActionUnfollowUsersType
   | ActionSetUserType
   | ActionSetCurrentPage
   | ActiolnSetTotalUsersCount
   | ActionSetLoading
   | ToggleFollowingProgress
