import React from 'react'
import LoginForm from './LoginForm'

type LoginPropsType = {}

function Login(props: LoginPropsType) {

   const onSubmit = (formData: any) => {
      console.log(formData)
   }

   return (
      <div>
         <h1>Login</h1>
         <LoginForm onSubmit={onSubmit}/>
      </div>
   )
}

export default Login
