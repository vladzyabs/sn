import {v1} from "uuid";
import {FOLLOW_USER, UNFOLLOW_USER, UsersPageActionType} from "./usersAction";

let initialState = {
    users: [
        {
            id: v1(),
            photo: 'https://www.rover.com/blog/wp-content/uploads/2019/05/3nEohCd.jpg',
            followed: true,
            fullName: 'Vladislav',
            status: 'Junior samuray',
            location: {city: 'Mogilev', county: 'Belarus'}
        },
        {
            id: v1(),
            photo: 'https://www.rover.com/blog/wp-content/uploads/2019/05/3nEohCd.jpg',
            followed: false,
            fullName: 'Elena',
            status: 'I feel happy',
            location: {city: 'Minsk', county: 'Belarus'}
        },
        {
            id: v1(),
            photo: 'https://www.rover.com/blog/wp-content/uploads/2019/05/3nEohCd.jpg',
            followed: true,
            fullName: 'Misha',
            status: 'big man',
            location: {city: 'Vitebsk', county: 'Belarus'}
        },
    ]
};

export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: UsersPageActionType): InitialStateType => {
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
        default:
            return state
    }
};

export default usersReducer