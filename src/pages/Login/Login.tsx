import React from 'react'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'
import {RootStateType} from '../../redux/rootStore'
import {thunkLogin} from '../../redux/authReducer/authAction'
import {connect, ConnectedProps} from 'react-redux'
import {paths} from '../../layout/paths'

type LoginPropsType = {}

function Login(props: LoginPropsType & PropsFromRedux) {

   const onSubmit = (formData: any) => {
      props.login(formData.login, formData.password, formData.rememberMe)
   }

   if (props.isAuth) {
      return <Redirect to={paths.profile}/>
   }

   return (
      <div>
         <h1>Login</h1>
         <LoginForm onSubmit={onSubmit}/>
      </div>
   )
}

const mstp = (state: RootStateType) => ({
   isAuth: state.auth.isAuth,
})

const mdtp = {
   login: (email: string, password: string, rememberMe: boolean = false) => thunkLogin(email, password, rememberMe),
}

const connector = connect(mstp, mdtp)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Login)
