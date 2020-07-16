import usersReducer, {InitialStateType} from "./usersReducer";
import {v1} from "uuid";
import * as action from "./usersAction";

let initialState: InitialStateType
let id1 = v1()
let id2 = v1()
let id3 = v1()
beforeEach(() => {
    initialState = {
        users: [
            {id: id1, name: 'A', followed: true, status: 'Aa', location: {city: 'a', county: 'A'}, photo: ''},
            {id: id2, name: 'B', followed: true, status: 'Bb', location: {city: 'b', county: 'B'}, photo: ''},
            {id: id3, name: 'C', followed: true, status: 'Cc', location: {city: 'c', county: 'C'}, photo: ''},
        ]
    }
})

test('must unsubscribe from the user', () => {
    let newState

    newState = usersReducer(initialState, action.actionUnfollowUsers(id1))

    expect(newState.users.length).toBe(initialState.users.length)
    expect(newState.users[0].followed).toBe(false)
    expect(newState.users[1].followed).toBe(initialState.users[1].followed)
    expect(newState.users[2].followed).toBe(initialState.users[2].followed)
})

test('must subscribe from the user', () => {
    let newState

    newState = usersReducer(initialState, action.actionFollowUsers(id1))

    expect(newState.users.length).toBe(initialState.users.length)
    expect(newState.users[0].followed).toBe(true)
    expect(newState.users[1].followed).toBe(initialState.users[1].followed)
    expect(newState.users[2].followed).toBe(initialState.users[2].followed)

})