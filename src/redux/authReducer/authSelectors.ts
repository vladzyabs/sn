import {RootStateType} from '../rootStore'

export const getIsAuth = (state: RootStateType) => state.auth.isAuth

export const getCurrentUser = (state: RootStateType) => ({
   id: state.auth.id,
   email: state.auth.email,
   login: state.auth.login,
})
