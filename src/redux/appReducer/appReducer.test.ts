import appReducer from './appReducer'
import * as action from './appAction'
import { AppStateType } from './appType'

let initialState: AppStateType

beforeEach(() => {
   initialState = {
      initialized: false,
   }
})

test('app shoulde be initialized', () => {
   const endState: AppStateType = appReducer(initialState, action.initializedSuccessAC())

   expect(endState.initialized).toBe(true)
})
