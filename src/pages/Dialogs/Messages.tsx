import React from 'react'
import style from './Dialogs.module.scss'
import Message from './Message'
import Icon, {iconsName, iconsPrefix} from '../../components/Icon/Icon'
import {connect} from 'react-redux'
import {RootStateType} from '../../redux/rootStore'
import {actionAddMessage} from '../../redux/dialogsPage/dialogsAction'
import {MessagesType} from '../../redux/dialogsPage/dialogsType'
import {reduxForm, Field, InjectedFormProps} from 'redux-form'

type PropsMessagesType = {
   messages: MessagesType[]
   addMessage: (value: string) => void
}

function Messages(props: PropsMessagesType) {

   const onSubmit = (formData: any) => {
      props.addMessage(formData.newMessageBody)
   }

   return (
      <div className={style.messages}>
         <div className={style.messageWrapper}>

            {props.messages.map((item) => {
               return <Message key={item.id} id={item.id} message={item.message} fromMe={item.fromMe}/>
            })}

         </div>
         <div className={style.addMessage}>

            <span>New message:</span>

            <AddMessageReduxForm onSubmit={onSubmit}/>
         </div>
      </div>
   )
}

//form message -------------------------------------------------------------------------------------------------------

function FormMessage(props: {} & InjectedFormProps) {
   return (
      <form onSubmit={props.handleSubmit}>
         <Field className={style.textarea} name={'newMessageBody'} component={'textarea'}
                placeholder={'Enter your message'}/>
         <button className={style.button}>
            Send<Icon prefix={iconsPrefix.fas} iconName={iconsName.paperPlane} size={'sm'}/>
         </button>
      </form>
   )
}

const AddMessageReduxForm = reduxForm<{}>({
   form: 'dialogsAddMessage',
})(FormMessage)

// --------------------------------------------------------------------------------------------------------------------

const mstp = (state: RootStateType) => {
   return {
      messages: state.dialogsData.messages,
   }
}

const mdtp = {
   addMessage: (value: string) => (actionAddMessage(value)),
};

const connector = connect(mstp, mdtp)

export default connector(Messages)
