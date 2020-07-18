import {UserType} from "./usrsType";

export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const SET_USERS = 'SET_USERS';

type ActionFollowUsersType = { type: typeof FOLLOW_USER, userID: string | number}
export const actionFollowUsers = (userID: string | number): ActionFollowUsersType => {
    return {
        type: FOLLOW_USER,
        userID,
    }
};

type ActionUnfollowUsersType = { type: typeof UNFOLLOW_USER, userID: string | number}
export const actionUnfollowUsers = (userID: string | number): ActionUnfollowUsersType => {
    return {
        type: UNFOLLOW_USER,
        userID,
    }
};

type ActionSetUserType = { type: typeof SET_USERS, users: UserType }
export const actionSetUsers = (users: UserType): ActionSetUserType => {
    return {
        type: SET_USERS,
        users
    }
};

export type UsersPageActionType =
    ActionFollowUsersType
    | ActionUnfollowUsersType
    | ActionSetUserType