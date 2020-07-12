export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const SET_USERS = 'SET_USERS';

type ActionFollowUsersType = { type: typeof FOLLOW_USER, userID: string }
export const actionFollowUsers = (userID: string): ActionFollowUsersType => {
    return {
        type: FOLLOW_USER,
        userID,
    }
};

type ActionUnfollowUsersType = { type: typeof UNFOLLOW_USER, userID: string }
export const actionUnfollowUsers = (userID: string): ActionUnfollowUsersType => {
    return {
        type: UNFOLLOW_USER,
        userID,
    }
};

type ActionSetUserType = { type: typeof SET_USERS, users: any }
export const actionSetUsers = (users: any): ActionSetUserType => {
    return {
        type: SET_USERS,
        users
    }
};

export type UsersPageActionType =
    ActionFollowUsersType
    | ActionUnfollowUsersType
    | ActionSetUserType