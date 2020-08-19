import React from 'react';
import style from './Header.module.scss';
import {RootStateType} from '../../redux/rootStore';
import {connect, ConnectedProps} from 'react-redux';
import {setAuthDataAC} from '../../redux/authReducer/authAction';
import {NavLink} from 'react-router-dom';
import {paths} from '../../layout/paths';
import {authAPI} from '../../api/api';

class Header extends React.Component<PropsFromRedux & {}> {
   componentDidMount(): void {
      authAPI.getMe()
         .then(data => {
            if (data.resultCode === 0) {
               this.props.setAuthDataAC(data.data)
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
