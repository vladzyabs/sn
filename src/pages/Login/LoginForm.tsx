import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import Input from '../../components/common/Input/Input'
import {maxLength, required} from '../../utils/validation/validators'

type LoginFormPropsType = {}

const maxLengthField100 = maxLength(100)

function LoginForm(props: {} & InjectedFormProps) {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field type="text" name={'login'} component={Input} placeholder={'login'} validate={[required, maxLengthField100]}/>
         </div>
         <div>
            <Field type="password" name={'password'} component={Input} placeholder={'password'} validate={[required, maxLengthField100]}/>
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

export default reduxForm<{}>({
   form: 'loginForm',
})(LoginForm)
