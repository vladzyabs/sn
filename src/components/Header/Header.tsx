import React from 'react';
import style from './Header.module.scss';
import * as axios from 'axios';
import {RootStateType} from '../../redux/rootStore';
import {connect, ConnectedProps} from 'react-redux';
import {setAuthDataAC} from '../../redux/authReducer/authAction';
import {NavLink} from 'react-router-dom';
import {paths} from '../../layout/paths';

class Header extends React.Component<PropsFromRedux & {}> {
   componentDidMount(): void {
      axios.default
         .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
         })
         .then(response => {
            if (response.data.resultCode === 0) {
               this.props.setAuthDataAC(response.data.data)
            }
         })
   }

   render() {
      return (
         <header className={style.header}>
            HEADER
            {this.props.isAuth
            ?<div>{this.props.login}</div>
            :<div><NavLink to={paths.login}>Login</NavLink></div>}
         </header>
      )
   }
}

const mstp = (state: RootStateType) => {
   return {
      login: state.auth.login,
      isAuth: state.auth.isAuth,
   }
}

const connector = connect(mstp, {setAuthDataAC})

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Header)
