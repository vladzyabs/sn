import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

type LoginFormPropsType = {}

function LoginForm(props: LoginFormPropsType & InjectedFormProps) {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field type="text" name={'login'} component={'input'} placeholder={'login'}/>
         </div>
         <div>
            <Field type="text" name={'password'} component={'input'} placeholder={'password'}/>
         </div>
         <div>
            <Field type="checkbox" name={'rememberMe'} component={'input'}/>Remember me
         </div>
         <div>
            <button>login</button>
         </div>
      </form>
   )
}

export default reduxForm<{}, LoginFormPropsType>({
   form: 'login',
})(LoginForm)
