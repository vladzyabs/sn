export const SET_USER_DATA = 'SET_USER_DATA'
export const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

export type AuthType = {
   id: number | null
   login: string | null
   email: string | null
   isAuth: boolean
   captchaUrl: string | null
}
