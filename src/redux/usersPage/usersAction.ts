import {UserType} from "./usersType";

export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

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
        users
    }
};

type ActionSetCurrentPage = { type: typeof SET_CURRENT_PAGE, page: number }
export const actionSetCurrentPage = (page: number): ActionSetCurrentPage => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

type ActiolnSetTotalUsersCount = { type: typeof SET_TOTAL_USERS_COUNT, count: number }
export const actionSetTotalUsersCount = (count: number): ActiolnSetTotalUsersCount => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count
    }
}

export type UsersPageActionType =
    ActionFollowUsersType
    | ActionUnfollowUsersType
    | ActionSetUserType
    | ActionSetCurrentPage
    | ActiolnSetTotalUsersCount