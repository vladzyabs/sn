import usersReducer from "./usersReducer";
import * as action from "./usersAction";
import {UsersStateType} from "./usersType";

let initialState: UsersStateType
beforeEach(() => {
    initialState = {
        users: [
            {id: 0, name: 'A', uniqueUrlName: null, photos: {small: null, large: null}, status: 'a', followed: true},
            {id: 1, name: 'B', uniqueUrlName: null, photos: {small: null, large: null}, status: 'b', followed: false},
            {id: 2, name: 'C', uniqueUrlName: null, photos: {small: null, large: null}, status: 'c', followed: true},
        ],
        totalCount: 1000,
        pageSize: 10,
        currentPage: 1,
        isLoading: false,
    }
})

test('must unsubscribe from the user', () => {
    let newState

    newState = usersReducer(initialState, action.actionUnfollowUsers(0))

    expect(newState.users.length).toBe(initialState.users.length)
    expect(newState.users[0].followed).toBe(false)
    expect(newState.users[1].followed).toBe(initialState.users[1].followed)
    expect(newState.users[2].followed).toBe(initialState.users[2].followed)
})

test('must subscribe from the user', () => {
    let newState

    newState = usersReducer(initialState, action.actionFollowUsers(1))

    expect(newState.users.length).toBe(initialState.users.length)
    expect(newState.users[0].followed).toBe(initialState.users[0].followed)
    expect(newState.users[1].followed).toBe(true)
    expect(newState.users[2].followed).toBe(initialState.users[2].followed)
})

test('number of users should be 2000', () => {
    let newState

    newState = usersReducer(initialState, action.actionSetTotalUsersCount(2000))

    expect(newState.totalCount).toBe(2000)
})

test('current page should be 5', () => {
    let newState

    newState = usersReducer(initialState, action.actionSetCurrentPage(5))

    expect(newState.currentPage).toBe(5)
})

test('value loading in state should change', () => {
    let newState = usersReducer(initialState, action.actionSetLoading(true))

    expect(newState.isLoading).toBe(true)

    newState = usersReducer(initialState, action.actionSetLoading(true))

    expect(newState.isLoading).toBe(true)

    newState = usersReducer(initialState, action.actionSetLoading(false))

    expect(newState.isLoading).toBe(false)
})
