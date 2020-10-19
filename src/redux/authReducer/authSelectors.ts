import {RootStateType} from '../rootStore'

export const getIsAuth = (state: RootStateType) => state.auth.isAuth

export const getCaptcha = (state: RootStateType) => state.auth.captchaUrl

export const getCurrentUser = (state: RootStateType) => ({
   id: state.auth.id,
   email: state.auth.email,
   login: state.auth.login,
})
