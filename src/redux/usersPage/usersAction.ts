import { Dispatch } from 'redux'
import {
   FOLLOW_USER,
   SET_CURRENT_PAGE,
   SET_LOADING,
   SET_TOTAL_USERS_COUNT,
   SET_USERS, TOGGLE_FOLLOWING_PROGRESS,
   UNFOLLOW_USER,
   UserType,
} from './usersType'
import { usersAPI } from '../../api/api'

// actions =============================================================================================================

export const actionFollowUsers = (userID: number) => ({
   type: FOLLOW_USER,
   userID,
} as const)
type FollowUsersActionType = ReturnType<typeof actionFollowUsers>

export const actionUnfollowUsers = (userID: number) => ({
   type: UNFOLLOW_USER,
   userID,
} as const)
type UnfollowUsersActionType = ReturnType<typeof actionUnfollowUsers>

export const actionSetUsers = (users: UserType[]) => ({
   type: SET_USERS,
   users,
} as const)
type SetUserActionType = ReturnType<typeof actionSetUsers>

export const actionSetCurrentPage = (page: number) => ({
   type: SET_CURRENT_PAGE,
   page,
} as const)
type SetCurrentPageActionType = ReturnType<typeof actionSetCurrentPage>

export const actionSetTotalUsersCount = (count: number) => ({
   type: SET_TOTAL_USERS_COUNT,
   count,
} as const)
type SetTotalUsersCountActionType = ReturnType<typeof actionSetTotalUsersCount>

export const actionSetLoading = (loading: boolean) => ({
   type: SET_LOADING,
   payload: loading,
} as const)
type SetLoadingActionType = ReturnType<typeof actionSetLoading>

export const actionToggleFollowingProgress = (isFetching: boolean, userID: number) => ({
   type: TOGGLE_FOLLOWING_PROGRESS,
   isFetching,
   userID,
} as const)
type ToggleFollowingProgress = ReturnType<typeof actionToggleFollowingProgress>

// thunks ==============================================================================================================

export const thunkGetUser = (page: number, pageSize: number) =>
   async (dispatch: Dispatch) => {
      dispatch(actionSetLoading(true))
      dispatch(actionSetCurrentPage(page))
      const res = await usersAPI.getUsers(page, pageSize)
      if (res.items) {
         dispatch(actionSetUsers(res.items))
         dispatch(actionSetTotalUsersCount(res.totalCount))
         dispatch(actionSetLoading(false))
      }
   }

const followUnfollowFlow = async (dispatch: Dispatch, apiMethod: any, actionCreator: any, userID: number) => {
   dispatch(actionToggleFollowingProgress(true, userID))
   const res = await apiMethod
   if (res.resultCode === 0) {
      dispatch(actionCreator)
   }
   dispatch(actionToggleFollowingProgress(false, userID))
}

export const thunkUnfollow = (userID: number) =>
   async (dispatch: Dispatch) => {
      await followUnfollowFlow(dispatch, usersAPI.unfollowUser(userID), actionUnfollowUsers(userID), userID)
   }

export const thunkFollow = (userID: number) =>
   async (dispatch: Dispatch) => {
      await followUnfollowFlow(dispatch, usersAPI.followUser(userID), actionFollowUsers(userID), userID)
   }

export type UsersPageActionType =
   FollowUsersActionType
   | UnfollowUsersActionType
   | SetUserActionType
   | SetCurrentPageActionType
   | SetTotalUsersCountActionType
   | SetLoadingActionType
   | ToggleFollowingProgress
