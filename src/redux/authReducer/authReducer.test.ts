import { authReducer } from './authReducer'
import * as action from './authAction'
import { AuthType } from './authTypes'


let initialState: AuthType

beforeEach(() => {
   initialState = {
      id: null,
      email: null,
      login: null,
      isAuth: false,
   }
})

test('user logged in', () => {
   const userData = {
      id: 1,
      login: 'login',
      email: 'email',
   }
   const endState: AuthType = authReducer(initialState, action.setAuthDataAC(userData, true))

   expect(endState.isAuth).toBe(true)
   expect(endState.id).toBe(1)
   expect(endState.login).toBe('login')
   expect(endState.email).toBe('email')
})

test('user logged out', () => {
   const initialState = {
      id: 1,
      email: 'email',
      login: 'login',
      isAuth: true,
   }
   const endState: AuthType = authReducer(initialState, action.setAuthDataAC({
      id: null,
      email: null,
      login: null,
   }, false))

   expect(endState.isAuth).toBe(false)
   expect(endState.id).toBeNull()
   expect(endState.login).toBeNull()
   expect(endState.email).toBeNull()
})
