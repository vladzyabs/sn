import React, {Dispatch} from 'react'
import {Redirect} from 'react-router-dom'
import {paths} from '../../layout/paths'
import {RootActionType, RootStateType} from '../../redux/rootStore'
import {connect, ConnectedProps} from 'react-redux'

const withAuthRedirect = (Component: React.ComponentType<{ isAuth: boolean; dispatch: Dispatch<RootActionType> }>) => {

   const mstp = (state: RootStateType) => {
      return {
         isAuth: state.auth.isAuth
      }
   }

   const AuthRedirect = (props: PropsFromRedux) => {
      if (!props.isAuth) {
         return <Redirect to={paths.login}/>
      }
      return <Component {...props}/>
   }

   const connector = connect(mstp)

   type PropsFromRedux = ConnectedProps<typeof connector>

   return connector(AuthRedirect)
}

export default withAuthRedirect
