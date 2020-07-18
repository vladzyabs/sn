import {FOLLOW_USER, SET_USERS, UNFOLLOW_USER, UsersPageActionType} from "./usersAction";
import {UsersStateType} from "./usrsType";

let initialState: UsersStateType = {
    users: []
};

const usersReducer = (state = initialState, action: UsersPageActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.userID === user.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.userID === user.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, action.users]
            };
        default:
            return state
    }
};

export default usersReducer