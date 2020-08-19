import {
    FOLLOW_USER,
    SET_CURRENT_PAGE,
    SET_LOADING,
    SET_TOTAL_USERS_COUNT,
    SET_USERS, TOGGLE_FOLLOWING_PROGRESS,
    UNFOLLOW_USER,
    UserType,
} from './usersType';

type ActionFollowUsersType = { type: typeof FOLLOW_USER, userID: string | number }
export const actionFollowUsers = (userID: string | number): ActionFollowUsersType => {
   return {
      type: FOLLOW_USER,
      userID,
   }
};

type ActionUnfollowUsersType = { type: typeof UNFOLLOW_USER, userID: string | number }
export const actionUnfollowUsers = (userID: string | number): ActionUnfollowUsersType => {
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

export type UsersPageActionType =
   ActionFollowUsersType
   | ActionUnfollowUsersType
   | ActionSetUserType
   | ActionSetCurrentPage
   | ActiolnSetTotalUsersCount
   | ActionSetLoading
   | ToggleFollowingProgress
