import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import Input from '../../components/common/Input/Input'
import {maxLength, required} from '../../utils/validation/validators'
import {useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootStore'

const maxLengthField100 = maxLength(100)

function LoginForm(props: {} & InjectedFormProps) {

   const captchaUrl = useSelector<RootStateType>(state => state.auth.captchaUrl)

   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field type="text" name={'email'} component={Input} placeholder={'email'} validate={[required, maxLengthField100]}/>
         </div>
         <div>
            <Field type="password" name={'password'} component={Input} placeholder={'password'} validate={[required, maxLengthField100]}/>
         </div>
         <div>
            <Field type="checkbox" name={'rememberMe'} component={'input'}/>Remember me
         </div>
         {captchaUrl && <div>
             {/*@ts-ignore*/}
             <img src={captchaUrl} alt="captcha"/>
             <Field type="text" name={'captcha'} component={Input} placeholder={'captcha'} validate={[required, maxLengthField100]}/>
         </div>}
         {props.error && <div style={{color: 'red', margin: '5px'}}>{props.error}</div>}
         <div>
            <button>login</button>
         </div>
      </form>
   )
}

export default reduxForm<{captchaUrl?: string}>({
   form: 'loginForm',
})(React.memo(LoginForm))
