import React from 'react'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'
import {RootStateType} from '../../redux/rootStore'
import {thunkLogin} from '../../redux/authReducer/authAction'
import {paths} from '../../layout/paths'
import {getCaptcha, getIsAuth} from '../../redux/authReducer/authSelectors'
import {useDispatch, useSelector} from 'react-redux'

type LoginPropsType = {}

function Login(props: LoginPropsType) {

   const dispatch = useDispatch()
   const isAuth = useSelector<RootStateType>(state => state.auth.isAuth)

   const onSubmit = (formData: any) => {
      dispatch(thunkLogin({...formData}))
   }

   if (isAuth) {
      return <Redirect to={paths.profile}/>
   }

   return (
      <div>
         <h1>Login</h1>
         <LoginForm onSubmit={onSubmit}/>
      </div>
   )
}

export default React.memo(Login)
